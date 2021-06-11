import { Module } from '@nestjs/common';
import { UserServiceProvider } from './user.service.provider';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  providers: [UserServiceProvider],
  imports: []
})
export class UserModule {}
