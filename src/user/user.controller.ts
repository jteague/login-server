import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll() : User[] {
    return this.userService.fetchAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) : User {
    return this.userService.fetch(+id);
  }

  @Post()
  create(@Body() user: User) : boolean {
    return this.userService.insert(user);
  }

  @Patch(':id')
  update(@Body() user: User) : boolean {
    return this.userService.update(user);
  }

  @Delete(':id')
  remove(@Param('id') id: string) : boolean {
    return this.userService.remove(+id);
  }
}
