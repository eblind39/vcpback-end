import {User} from '../user/user.entity'
import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm'
import {ApiProperty} from '@nestjs/swagger'

@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id!: number

    @Column({type: 'varchar', length: 100})
    @ApiProperty()
    name: string

    // @ManyToOne(() => User, (user: User) => user.role)
    // user: User
}
