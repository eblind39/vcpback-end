import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    JoinColumn,
    ManyToOne,
} from 'typeorm'
import {User} from '../user/user.entity'

@Entity()
export class Follower {
    @PrimaryGeneratedColumn()
    id!: number

    @ManyToOne(type => User, user => user.followerlst)
    @JoinColumn({name: 'userId_follower', referencedColumnName: 'id'})
    userFollower: User

    @ManyToOne(type => User, user => user.followedlst)
    @JoinColumn({name: 'userId_followed', referencedColumnName: 'id'})
    userFollowed: User

    @Column({
        name: 'follow_date',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
    })
    followDate!: Date

    @Column({
        name: 'unfollow_date',
        type: 'timestamptz',
        nullable: true,
    })
    unfollowDate!: Date
}
