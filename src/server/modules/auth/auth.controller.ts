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

  @Get('twitter/uri')
  async requestTwitterRedirectUri(): Promise<any> {
    return await this.authService.requestTwitterRedirectUri();
  }

  @Post('twitter/token')
  async requestTwitterAccessToken(@Req() req: Request): Promise<any> {
    return await this.authService.requestTwitterAccessToken(req.body.oauth_token, req.body.oauth_verifier);
  }

  @Post('twitter/signin')
  async twitterSignIn(@Req() req: Request): Promise<IToken> {
    return await this.authService.createToken(req.user);
  }

  @Get('google/uri')
  async requestGoogleRedirectUri(): Promise<any> {
    return await this.authService.requestGoogleRedirectUri();
  }

  @Post('google/token')
  async requestGoogleAccessToken(@Req() req: Request): Promise<any> {
    return await this.authService.requestGoogleAccessToken(req.body.code);
  }

  @Post('google/signin')
  async googleSignIn(@Req() req: Request): Promise<IToken> {
    return await this.authService.createToken(req.user);
  }

  @Get('authorized')
  public async authorized() {
    console.log('Authorized route...');
  }
}
