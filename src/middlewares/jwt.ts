import { Request, Response, NextFunction } from "express";
import * as jwt from 'jsonwebtoken';
import config from "../config/config";

export const checkJwt = (req: Request, res: Response, next: NextFunction)=>{
    console.log('REQ->', req.header)
    const token = <string>req.headers['auth'];
    let jwtPlayload;

    try{
        jwtPlayload = <any>jwt.verify(token, config.jwtSecret);
        res.locals.jwtPlayload = jwtPlayload;
    }
    catch(e){
        return res.status(401).json({message: ' Not Autorized'});
            
    }

    const {userId, username} = jwtPlayload;
    const newToken = jwt.sign({userId, username}, config.jwtSecret, {expiresIn: '1h'});
    res.setHeader('token', newToken);
    //call next
    next();

}