import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDto, User } from '@nest-mono-repo/shared';

@Injectable()
export class AuthService {
  constructor(@Inject('AUTH_SERVICE') private client: ClientProxy) {}

  signup(user: CreateUserDto) {
    console.log(user);
    const pattern = {
      cmd: 'signup',
    };
    return this.client.send<User>(pattern, user);
  }
}
