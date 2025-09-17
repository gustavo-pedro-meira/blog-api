import { Module } from '@nestjs/common';
// import { UserController } from './user/user.controller';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
