import {
    IsBoolean,
    IsDate,
    IsDateString,
    IsNotEmpty,
    IsOptional,
    IsString,
    Length,
} from 'class-validator'

export class CreateVideoDto {
    @IsString()
    @IsNotEmpty()
    @Length(3, 255)
    public title: string

    @IsBoolean()
    @IsNotEmpty()
    @IsOptional()
    public published!: boolean

    @IsString()
    @Length(1, 1500)
    public videourl: string

    @IsDateString()
    creationDate!: Date
}
