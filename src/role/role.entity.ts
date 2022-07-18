import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({type: 'varchar', length: 100})
    name: string
}
