import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty({ message: "O nome não pode ser vazio." })
    @IsString({ message: "O nome é uma string." })
    name: string;

    @IsNotEmpty({ message: "O username não pode ser vazio." })
    @IsString({ message: "O username é um string." })
    @MinLength(6, { message : "O min de caracteres de username são 6." })
    username: string;

    @IsEmail()
    @IsNotEmpty({ message: "Email não pode ser vazio." })
    @IsString({ message: "Email é uma string." })
    email: string;

    @IsNotEmpty({ message: "A senha não pode ser vazio." })
    @MinLength(6, { message: "O min de caracteres da senha é 6." })
    password: string;
}