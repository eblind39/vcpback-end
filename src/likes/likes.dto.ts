import {ApiProperty} from '@nestjs/swagger'
import {IsDateString, IsNumber, IsOptional} from 'class-validator'

export class CreateLikesDto {
    @IsNumber()
    @ApiProperty()
    videoId: number

    @IsNumber()
    @ApiProperty()
    userId: number

    @IsDateString()
    @IsOptional()
    unlikeDate!: Date
}

export class UnlikedDto extends CreateLikesDto {
    @ApiProperty()
    likeDate!: Date

    @ApiProperty()
    unlikeDate!: Date
}
