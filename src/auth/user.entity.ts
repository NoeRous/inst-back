import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length:20})
    name: string;

    @Column({length:100, unique: true})
    username: string;

    @Column({length:100})
    password: string;

    @Column({type:'boolean',default:false})
    active: boolean;

    @CreateDateColumn()
    createdOn: Date;

}