import { Injectable } from '@nestjs/common';
import { CreateUserDto, User } from '@nest-mono-repo/shared';

@Injectable()
export class AppService {
  users: User[] = [];

  signup(newUser: CreateUserDto) {
    this.users.push();
  }
}
