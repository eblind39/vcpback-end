import {User} from '../user/user.entity'
import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm'

@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({type: 'varchar', length: 100})
    name: string

    // @ManyToOne(() => User, (user: User) => user.role)
    // user: User
}
