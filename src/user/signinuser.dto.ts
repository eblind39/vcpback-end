import {ApiProperty} from '@nestjs/swagger'
import {IsEmail, IsNotEmpty, IsString, Length} from 'class-validator'

export class LoginUserDto {
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    @Length(3, 100)
    @ApiProperty()
    public email: string

    @IsString()
    @IsNotEmpty()
    @Length(3, 100)
    @ApiProperty()
    public password: string
}
