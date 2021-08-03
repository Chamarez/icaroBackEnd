import { getRepository } from "typeorm";
import {Request, Response} from 'express';
import {User} from '../entity/User';
import * as jwt from 'jsonwebtoken';
import config from '../config/config';

class AuthController{
    static login = async (req: Request, res: Response)=>{
        const {username, password} = req.body;
        
        if( !(username && password)){
            return res.status(400).json({message: 'username & password are requiered!'});  
        }
        const userRepository = getRepository(User);
        let user: User;
        try{
            user = await userRepository.findOneOrFail({where:{username}});
        }
        catch(e){
            return res.status(400).json({message: ' username or password incorrect!'})
        }
        //Check password
        if(!user.checkPassword(password)){
            return res.status(400).json({message: 'username or password are incorrect'})
        }
        const token = jwt.sign({userId: user.id, username: user.username}, config.jwtSecret, {expiresIn: '1h'});
        res.json({message:'OK', token});
    };
    
    static changePassword= async (req: Request, res: Response)=>{
        const {userId} = res.locals.jwtPlayload;
        const {oldPassword, newPassword} = req.body;

        if(!(oldPassword && newPassword)){
            res.status(400).json({message: 'old password & new password are requiered'});

        }
        const userRepository = getRepository(User);
        let user: User;
        try{
            user = await userRepository.findOneOrFail(userId);
        }
        catch(e){
            res.status(400).json({message: 'Something goes wrong'});
        }
        if (!user.checkPassword(oldPassword)){
            return res.status(401).json({message: 'Check your old password'})
        }

    };

}
export default AuthController;