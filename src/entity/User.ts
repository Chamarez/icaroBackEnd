import {Entity, PrimaryGeneratedColumn, Column, Unique, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { MinLength, IsNotEmpty, IsEmail } from "class-validator";
import * as bcrypt from 'bcryptjs';
//TO DO ISEMAIL

@Entity()
@Unique(['username'])
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @MinLength(6)
    @IsEmail()
    @IsNotEmpty()
    username: string

    @Column()
    @MinLength(6)
    @IsNotEmpty()
    password: string;

    @Column()
    @IsNotEmpty()
    role: string;

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updateAt: Date;

    hashPasword():void{
        const salt = bcrypt.genSaltSync(10);
        this.password = bcrypt.hashSync(this.password, salt);
    }

    checkPassword(password:string):boolean{
        return bcrypt.compareSync(password, this.password);

    }

}
