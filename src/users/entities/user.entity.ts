import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

export class User {
    @Column({length:100, unique: true})
    username: string;

    @Column({length:100})
    password: string;
}
