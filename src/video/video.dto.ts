import {ApiProperty} from '@nestjs/swagger'
import {
    IsBoolean,
    IsDate,
    IsDateString,
    isNotEmpty,
    IsNotEmpty,
    IsNumber,
    isNumber,
    IsOptional,
    IsString,
    Length,
} from 'class-validator'

export class CreateVideoDto {
    @IsString()
    @IsNotEmpty()
    @Length(3, 1500)
    @ApiProperty()
    public title: string

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    public userId: number

    @IsBoolean()
    @IsNotEmpty()
    @IsOptional()
    @ApiProperty()
    public published!: boolean

    @IsString()
    @Length(1, 1500)
    @ApiProperty()
    public videourl: string

    @IsDateString()
    @IsOptional()
    creationDate!: Date
}

export class CreatedVideoDto extends CreateVideoDto {
    @IsDateString()
    @IsOptional()
    @ApiProperty()
    creationDate!: Date
}
