import { Injectable } from '@nestjs/common';
import { createUserDTO } from './dto/createUserDTO';
import { User } from './interfaces/user.interface';

@Injectable()
export class UserService {
  private users: User[] = [
    {
      id: 0,
      name: 'Sasha',
      phone: '+5564541',
    },
  ];

  getUsers() {
    return this.users;
  }

  getUser(id: number): User {
    return this.users.find((user) => user.id == id);
  }

  createUser(newUser: createUserDTO): User {
    const user: User = {
      id: this.users.length,
      ...newUser,
    };
    this.users.push(user);
    return user;
  }

  updateUser(id: number, newUser: createUserDTO): User {
    const user: User = this.getUser(id);
    const index: number = this.users.indexOf(user);
    return (this.users[index] = { ...user, ...newUser });
  }

  deleteUser(id: number): boolean {
    this.users = this.users.filter((user) => user.id == id);
    return this.hasUserId(id);
  }

  hasUserId(id: number): boolean {
    return !!this.getUser(id);
  }
}
