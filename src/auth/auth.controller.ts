import { Controller, Post, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from '../app.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService){}

  @Public()
  @Post('/login')
  async login(@Request() req){
    return this.authService.login(req.body);
  }
}
