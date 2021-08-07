import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { createUserDTO } from './dto/createUserDTO';
import { User } from './interfaces/user.interface';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userServise: UserService) {}

  @Get()
  getAllUsers(): User[] {
    return this.userServise.getUsers();
  }

  @Get(':id')
  getUser(@Param('id') id: number): User {
    return this.userServise.getUser(id);
  }

  @Post()
  addUser(@Body() newUser: createUserDTO): User {
    return this.userServise.createUser(newUser);
  }

  @Patch(':id')
  updateUser(@Param('id') id: number, @Body() updateUser: createUserDTO): User {
    return this.userServise.updateUser(id, updateUser);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number): boolean {
    return this.userServise.deleteUser(id);
  }
}
