import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";


export class SignInDto {
    @IsEmail()
    @IsNotEmpty()
    @IsString()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password: string;
}