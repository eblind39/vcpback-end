import {IsEmail, IsNotEmpty, IsString} from 'class-validator'

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    public name: string

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    public email: string

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    public password: string
}
