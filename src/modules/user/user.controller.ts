import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateUserUseCase } from "./useCases/create-user.usercase";
import { CreateUserDto } from "./dto/create-user.dto";

@Controller('user')
export class UserController {
    constructor (private readonly createUserUseCase: CreateUserUseCase) {}

    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.createUserUseCase.execute(createUserDto)
    }
}