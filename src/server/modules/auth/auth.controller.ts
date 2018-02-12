import { Controller, Post, Body, Get, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { IToken } from './interfaces/token.interface';
import { Request } from 'express';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signUp(@Body() createUserDto: CreateUserDto): Promise<IToken> {
    return await this.authService.signUserUp(createUserDto);
  }

  @Post('signin')
  async signIn(@Req() req: Request, @Body() createUserDto: CreateUserDto): Promise<IToken> {
    return await this.authService.signUserIn(req);
  }

  @Get('authorized')
  public async authorized() {
    console.log('Authorized route...');
  }
}
