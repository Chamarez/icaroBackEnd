import {Entity, PrimaryGeneratedColumn, Column, Unique, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { MinLength, IsNotEmpty, IsEmail, MaxLength } from "class-validator";
import * as bcrypt from 'bcryptjs';


@Entity()
export class Msj {

    @PrimaryGeneratedColumn()
    msjId: number;

    @Column()
    @IsNotEmpty()
    sender: string;

    @Column()
    @IsNotEmpty()
    addressee: string;
        
    @Column()
    @MaxLength(144)
    @IsNotEmpty()
    msjs: string;
    
}
