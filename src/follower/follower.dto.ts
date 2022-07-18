import {IsNumber} from 'class-validator'

export class CreateFollowerDto {
    @IsNumber()
    userFollowerId: number

    @IsNumber()
    userFollowedId: number
}
