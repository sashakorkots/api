import { Injectable } from '@nestjs/common';
import { User } from './user.interface';

@Injectable()
export class UserService {
    private users = new Map<number,User>([
        [1,{
            name: 'Sasha',
            phone: '+1884525845',
        }],
        [2,{
            name: 'Vanya',
            phone: '+8646846148'
        }], 
    ]);
    
    getUsers(): Map<number, User> {
        return  this.users;
    }

    getUser(id: number): User {
        return this.users[1];
    }

    updateUser(id: number, newUser: User):User {
        return this.users[id] = {...this.users[id], ...newUser};
    }

    deleteUser(id: number): boolean {
        return this.users.delete(id);
    }

    hasUserId(id: number): boolean {
        return this.users.has(id);
    }
}