import { Body, Controller } from '@nestjs/common';

import { AppService } from './app.service';
import { CreateUserDto } from '@nest-mono-repo/shared';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'signup' })
  signup(@Body() user: CreateUserDto) {
    console.log(user);
    return this.appService.signup(user);
  }
}
