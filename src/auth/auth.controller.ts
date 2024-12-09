import { Body, Controller, Post } from '@nestjs/common';
import { AuthPaload } from './auth.dto/auth.dto';
import { AuthService } from './auth.service';
import { SignUpDto } from './auth.dto/signup.dto';

@Controller('auth')
export class AuthController {
    
   constructor(private authService:AuthService){}

   @Post('/signup')
   signUp(@Body() signupdto:SignUpDto):Promise<{token:string}>{
    return this.authService.signUp(signupdto)
   }
}
