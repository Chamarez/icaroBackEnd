import {Entity, PrimaryGeneratedColumn, Column, Unique, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { MinLength, IsNotEmpty, IsEmail, MaxLength } from "class-validator";
import * as bcrypt from 'bcryptjs';
//TO DO ISEMAIL

@Entity()
export class Msj {

    @PrimaryGeneratedColumn()
    MsjId: number;

    
    @Column()
    @MinLength(6)
    @MaxLength(144)
    @IsNotEmpty()
    msj: string

    @Column()
    @IsNotEmpty()
    sender: string

    @Column()
    @IsNotEmpty()
    addressee: string
    
}
