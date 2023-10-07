import { Injectable } from '@nestjs/common';
import { CreateUserDto, User } from '@nest-mono-repo/shared';

@Injectable()
export class AppService {
  users: User[] = [];

  signup(newUserData: CreateUserDto) {
    const newUser = { id: Date.now(), ...newUserData };
    this.users.push(newUser);
    console.log(this.users);

    return newUser;
  }
}
