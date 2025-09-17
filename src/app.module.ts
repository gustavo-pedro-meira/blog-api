import { Module } from '@nestjs/common';
// import { UserController } from './user/user.controller';
import { UserModule } from './modules/user/user.module';
import { LoginModule } from './modules/login/login.module';

@Module({
  imports: [UserModule, LoginModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
