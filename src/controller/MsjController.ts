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
    static getBySender = async (req: Request, res:Response)=>{
        const {sender} = req.params
   
        
        const msjRepository = getRepository(Msj);
        try{
            const msj = await msjRepository.query(`SELECT msjs FROM msj WHERE sender=${sender}`);
            res.send(msj);
        }
        catch(e){
            res.status(404).json({message: 'No result'});
        }
    };
    static     getByaddressee = async (req: Request, res:Response)=>{
        const {addressee} = req.params;
        const msjRepository = getRepository(Msj);
        try{
            const msj = await msjRepository.query(`SELECT msjs FROM msj WHERE addressee=${addressee}`);
            res.send(msj)
        }
        catch(e){
            res.status(404).json({message: 'No result'});
        }
    };

}


export default UserController;