import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    ManyToOne,
    JoinColumn,
} from 'typeorm'
import {User} from '../user/user.entity'
import {Likes} from '../likes/likes.entity'

@Entity()
export class Video {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({type: 'varchar', length: 1500})
    title: string

    @Column({
        name: 'creation_date',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
    })
    creationDate!: Date

    @Column({type: 'boolean', default: false})
    published: boolean

    @Column({type: 'varchar', length: 1500})
    videourl: string

    @ManyToOne(() => User, user => user.videos)
    @JoinColumn({name: 'userId', referencedColumnName: 'id'})
    user?: User

    @OneToMany(() => Likes, likes => likes.video)
    likes?: Likes[]
}
