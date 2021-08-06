import { Body, Controller, Delete, Get, Param, Patch } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userServise: UserService) {}

  @Get()
  getAllUsers(): Map<number, User> {
    return this.userServise.getUsers();
  }

  @Get(':id')
  getUser(@Param() id: number): User {
    return this.userServise.getUser(id);
  }

  @Patch(':id')
  updateUser(@Param() id: number, @Body() updateUser: User): User {
    return this.userServise.updateUser(id, updateUser);
  }

  @Delete(':id')
  deleteUser(@Param() id: number): boolean {
    return this.userServise.deleteUser(id);
  }
}
