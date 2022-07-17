import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({type: 'varchar', length: 100})
    name: string

    @Column({type: 'varchar', length: 100, unique: true})
    email: string

    @Column({type: 'varchar', length: 500})
    password: string

    @Column({type: 'varchar', length: 1500})
    photourl: string
}
