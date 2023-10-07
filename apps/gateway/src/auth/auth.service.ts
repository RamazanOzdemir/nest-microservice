import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDto, User } from '@nest-mono-repo/shared';

@Injectable()
export class AuthService {
  constructor(@Inject('AUTH_SERVICE') private client: ClientProxy) {}

  signup(user: CreateUserDto) {
    return this.client.emit<User>('signup', user);
  }
}
