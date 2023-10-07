import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from '@nest-mono-repo/shared';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signup(@Body() user: CreateUserDto) {
    return this.authService.signup(user);
  }
}
