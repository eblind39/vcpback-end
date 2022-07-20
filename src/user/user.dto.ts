import {ApiProperty} from '@nestjs/swagger'
import {
    IsEmail,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
    Length,
} from 'class-validator'

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @Length(3, 100)
    @ApiProperty()
    public name: string

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    @Length(3, 100)
    @ApiProperty()
    public email: string

    @IsString()
    @IsNotEmpty()
    @Length(3, 500)
    @ApiProperty()
    public password: string

    @IsString()
    @Length(0, 1500)
    @IsOptional()
    public photourl: string

    @IsNumber()
    @ApiProperty()
    public roleId: number
}
