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
    public title: string

    @IsNumber()
    @IsNotEmpty()
    public userId: number

    @IsBoolean()
    @IsNotEmpty()
    @IsOptional()
    public published!: boolean

    @IsString()
    @Length(1, 1500)
    public videourl: string

    @IsDateString()
    @IsOptional()
    creationDate!: Date
}
