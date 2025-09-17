import { JwtService } from "@nestjs/jwt";
import { SignInDto } from "../dto/sign-in.dto";
import { PrismaService } from "src/infra/database/prisma.service";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { compare } from "bcrypt";

@Injectable()
export class SignInUseCase {
    constructor(private jwtService: JwtService, private prisma: PrismaService){}

    async execute(data: SignInDto) {
        const user = await this.prisma.user.findUnique({
            where: {
                email: data.email
            }
        })

        if (!user) {
            throw new UnauthorizedException()
        }

        const passwordValidation = await compare(data.password, user.password)
        if (!passwordValidation) {
            throw new UnauthorizedException()
        }

        const payload = {
            sub: user.id,
            email: user.email
        }

        const token = await this.jwtService.signAsync(payload);

        return {
            acess_token: token,
        }
    }
}