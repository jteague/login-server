import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { IUserDataAccess } from './user.dataaccess.interface';
import { User } from './entities/user.entity';

@Controller('user')
export class UserController {
  constructor(
    @Inject('IUserDataAccess')
    private readonly userService: IUserDataAccess) {

  }

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
