import { Controller, Get } from "@nestjs/common";

@Controller('user')
export class UserController {

    @Get("/olaGuga")
    getHello(): string {
        return 'Olá Gustavo Lindão!';
    }
}