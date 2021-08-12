import {createQueryBuilder, getConnection, getRepository, In, SelectQueryBuilder} from "typeorm";
import {Request, Response, NextFunction} from "express";
import {User} from "../entity/User";
import { arrayContains, validate } from "class-validator";
import UserController from "./UserController";
import { Msj } from "../entity/Msj";

export class MsjController {

    static newMsj = async (req:Request, res:Response) => {
        const {sender, addressee, msjs} = req.body;

        const msj = new Msj();

        msj.sender = sender;
        msj.addressee = addressee;
        msj.msjs = msjs;
        msj.date = Date();
        msj.readerreceived = 1; 
        msj.readersender = 1;  
        


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
        const {sender} = req.params;
        let count=0;
        
        const msjRepository = getRepository(Msj);
        try{
            let msj = await msjRepository.query(`SELECT addressee, msjs, date, msjId  FROM msj WHERE sender=${sender} AND readersender = 1`);
            res.send(msj);


        }
        catch(e){
            res.status(404).json({message: 'No result'});
        }
    };
    static getByaddressee = async (req: Request, res:Response)=>{
        const {addressee} = req.params;
        const msjRepository = getRepository(Msj);
        try{
            let msj = await msjRepository.query(`SELECT sender, msjs, date, msjId FROM msj WHERE addressee=${addressee} AND readerreceived = 1`);
            res.send(msj)
        }
        catch(e){
            res.status(404).json({message: 'No result'});
        }
    };
   ///delette mensagges
   static deleteMessaggeSended = async (req: Request, res: Response) =>{
   const {msjId} = req.params;
 
     const msjRepository =  getRepository(Msj)
     
     try{
        const msj = await msjRepository.query(`UPDATE msj SET readersender = 0 WHERE msjId =${msjId}`);
        
    }   catch(e){
        res.status(404).json({message: 'No result'});
    }
    res.status(201).json({message:'Message deleted'});

};
static deleteMessaggeReceived = async (req: Request, res: Response) =>{
    const {msjId} = req.params;
  
      const msjRepository =  getRepository(Msj)
      
      try{
          const msj = await msjRepository.query(`UPDATE msj SET readerreceived = 0 WHERE msjId =${msjId}`);

         
     }   catch(e){
         res.status(404).json({message: 'No result'});
     }
     res.status(201).json({message:'Message deleted'});

 };
}
export default UserController;