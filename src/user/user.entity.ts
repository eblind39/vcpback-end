import {Role} from '../role/role.entity'
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToOne,
    JoinColumn,
    OneToMany,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
} from 'typeorm'
import {Video} from '../video/video.entity'
import {Likes} from '../likes/likes.entity'
import {Follower} from '../follower/follower.entity'

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

    @Column({type: 'varchar', length: 1500, nullable: true})
    photourl: string

    @CreateDateColumn({
        name: 'created_at',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
    })
    createdAt: Date

    @UpdateDateColumn({name: 'updated_at', type: 'timestamptz', nullable: true})
    updatedAt!: Date

    @ManyToOne(type => Role, {
        eager: true,
    })
    @JoinColumn({name: 'roleId', referencedColumnName: 'id'})
    role: Role

    @OneToMany(type => Video, video => video.user)
    videos: Video[]

    @OneToMany(type => Likes, likes => likes.user)
    likes: Likes[]

    @OneToMany(type => Follower, followinglst => followinglst.userFollower)
    followerlst: Follower[]

    @OneToMany(type => Follower, followedlst => followedlst.userFollowed)
    followedlst: Follower[]
}
