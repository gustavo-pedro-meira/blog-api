import { PrismaService } from "src/infra/database/prisma.service";
import { CreateUserDto } from "../dto/create-user.dto";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { hash } from "bcrypt";

@Injectable()
export class CreateUserUseCase {
    constructor (private prisma: PrismaService){}
    async execute(createUserDto: CreateUserDto) {
        const user = await this.prisma.user.findFirst({
            where: {
                OR: [
                    {username: createUserDto.username},
                    {email: createUserDto.email},
                ]
            }
        })

        if (user) {
            throw new HttpException('Usuário já existe!', HttpStatus.CONFLICT);
        }

        const passwordHashed = await hash(createUserDto.password, 10);

        return await this.prisma.user.create({
            data: {
                ...createUserDto,
                password: passwordHashed,
            }
        });
    }
}