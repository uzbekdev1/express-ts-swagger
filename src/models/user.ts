import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    phone!: string;

    @Column()
    email!: string;

    @CreateDateColumn()
    created!: Date;

    @Column({ default: false })
    deleted!: boolean;
}