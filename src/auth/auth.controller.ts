import { Body, Controller, Post } from '@nestjs/common';
import { AuthPaload } from './auth.dto/auth.dto';
import { AuthService } from './auth.service';
import { SignUpDto } from './auth.dto/signup.dto';

@Controller('auth')
export class AuthController {
   constructor(private authService: AuthService) { }
   @Post('/signup')
   signUp(@Body() signupdto: SignUpDto): Promise<{ user: any }> {
      return this.authService.signUp(signupdto)
   }

   @Post('/signin')
   signin(@Body() signupdto: AuthPaload): Promise<{ token: any, data: any }> {
      return this.authService.login(signupdto)
   }
}
