import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { CreateUserUseCase } from "./useCases/create-user.usercase";
import { CreateUserDto } from "./dto/create-user.dto";
import { AuthGuard } from "src/infra/providers/auth-guard.provider";

@Controller('/users')
export class UserController {
    constructor (private readonly createUserUseCase: CreateUserUseCase) {}

    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.createUserUseCase.execute(createUserDto)
    }

    @UseGuards(AuthGuard)
    @Get('/profile')
    async profile() {
        return 'ok';
    }
}