import {Role} from '../role/role.entity'
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToOne,
    JoinColumn,
} from 'typeorm'

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

    @OneToOne(type => Role)
    @JoinColumn({name: 'roleId'})
    role: Role
}
