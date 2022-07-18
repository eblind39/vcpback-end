import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToOne,
    JoinColumn,
} from 'typeorm'

@Entity()
export class Video {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({type: 'varchar', length: 255})
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
}
