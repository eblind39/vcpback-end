import {IsDateString, IsNumber, IsOptional} from 'class-validator'

export class CreateLikesDto {
    @IsNumber()
    videoId: number

    @IsNumber()
    userId: number

    @IsDateString()
    @IsOptional()
    unlikeDate!: Date
}
