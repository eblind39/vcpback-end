import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    JoinColumn,
    ManyToOne,
} from 'typeorm'
import {User} from '../user/user.entity'
import {Video} from '../video/video.entity'

@Entity()
export class Likes {
    @PrimaryGeneratedColumn()
    id!: number

    @ManyToOne(type => User, user => user.likes, {eager: true})
    @JoinColumn({name: 'userId', referencedColumnName: 'id'})
    user: User

    @ManyToOne(type => Video, video => video.likes, {eager: true})
    @JoinColumn({name: 'videoId', referencedColumnName: 'id'})
    video: Video

    @Column({
        name: 'like_date',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
    })
    likeDate!: Date

    @Column({
        name: 'unlike_date',
        type: 'timestamptz',
        nullable: true,
    })
    unlikeDate!: Date
}
