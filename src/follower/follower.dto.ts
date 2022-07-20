import {ApiProperty} from '@nestjs/swagger'
import {IsNumber} from 'class-validator'

export class CreateFollowerDto {
    @IsNumber()
    @ApiProperty()
    userFollowerId: number

    @IsNumber()
    @ApiProperty()
    userFollowedId: number
}

export class FollowedDto extends CreateFollowerDto {
    @ApiProperty()
    followDate!: Date

    @ApiProperty()
    unfollowDate!: Date
}
