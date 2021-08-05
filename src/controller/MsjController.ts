import {getRepository} from "typeorm";
import {Request, Response, NextFunction} from "express";
import {User} from "../entity/User";
import { validate } from "class-validator";
import UserController from "./UserController";
import { Msj } from "../entity/Msj";

export class MsjController {

    static newMsj = async (req:Request, res:Response) => {
        const {sender, addressee, msjs} = req.body;

        const msj = new Msj();

        msj.sender = sender;
        msj.addressee = addressee;
        msj.msjs = msjs;

        //validate
        const validationOpt = {validationError:{target:false, value:false}}

        const errors = await validate(msj, validationOpt);
        if(errors.length>0){
            return res.status(400).json(errors);
        }
        //todo: 

        const msjRepository = getRepository(Msj)
        try{
            
             await msjRepository.save(msj);

        }
        catch(e){
            return res.status(409).json({message:'Error to send msj'});
        }
        // All ok
        res.send('Msj sended!')
    };


}


export default UserController;