import { Controller, Post, Get, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { IToken } from './interfaces/token.interface';
import { Request } from 'express';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signUp(@Req() req: Request): Promise<IToken> {
    return await this.authService.createToken(req.user);
  }

  @Post('signin')
  async signIn(@Req() req: Request): Promise<IToken> {
    return await this.authService.createToken(req.user);
  }

  @Get('facebook/uri')
  async requestFacebookRedirectUrl(): Promise<{redirect_uri: string}> {
    return await this.authService.requestFacebookRedirectUri();
  }

  @Post('facebook/token')
  async requestFacebookAccessToken(@Req() req: Request): Promise<IToken> {
    return await this.authService.requestFacebookAccessToken(req.body.code);
  }

  @Post('facebook/signin')
  async facebookSignIn(@Req() req: Request): Promise<any> {
    return await this.authService.createToken(req.user);
  }

  @Get('authorized')
  public async authorized() {
    console.log('Authorized route...');
  }
}
