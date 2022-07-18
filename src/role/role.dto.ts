import {IsEmail, IsNotEmpty, IsString, Length} from 'class-validator'

export class CreateRoleDto {
    @IsString()
    @IsNotEmpty()
    @Length(3, 100)
    public name: string
}
