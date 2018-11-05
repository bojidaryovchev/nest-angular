import { Controller, Post, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

import { AuthService } from './auth.service';
import { IToken } from './interfaces/token.interface';
import { RolesGuard } from '../../guards/roles.guard';
import { Roles } from '../../decorators/roles.decorator';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('local/signup')
  async requestJsonWebTokenAfterLocalSignUp(@Req() req: Request): Promise<IToken> {
    return await this.authService.createToken(req.user);
  }

  @Post('local/signin')
  async requestJsonWebTokenAfterLocalSignIn(@Req() req: Request): Promise<IToken> {
    return await this.authService.createToken(req.user);
  }

  @Get('facebook/uri')
  async requestFacebookRedirectUrl(): Promise<{redirect_uri: string}> {
    return await this.authService.requestFacebookRedirectUri();
  }

  @Post('facebook/signin')
  async facebookSignIn(@Req() req: Request): Promise<IToken> {
    return await this.authService.facebookSignIn(req.body.code);
  }

  @Post('facebook/token')
  async requestJsonWebTokenAfterFacebookSignIn(@Req() req: Request): Promise<IToken> {
    return await this.authService.createToken(req.user);
  }

  @Get('twitter/uri')
  async requestTwitterRedirectUri(): Promise<any> {
    return await this.authService.requestTwitterRedirectUri();
  }

  @Post('twitter/signin')
  async twitterSignIn(@Req() req: Request): Promise<any> {
    return await this.authService.twitterSignIn(req.body.oauth_token, req.body.oauth_verifier);
  }

  @Post('twitter/token')
  async requestJsonWebTokenAfterTwitterSignIn(@Req() req: Request): Promise<IToken> {
    return await this.authService.createToken(req.user);
  }

  @Get('google/uri')
  async requestGoogleRedirectUri(): Promise<any> {
    return await this.authService.requestGoogleRedirectUri();
  }

  @Post('google/signin')
  async googleSignIn(@Req() req: Request): Promise<any> {
    return await this.authService.googleSignIn(req.body.code);
  }

  @Post('google/token')
  async requestJsonWebTokenAfterGoogleSignIn(@Req() req: Request): Promise<IToken> {
    return await this.authService.createToken(req.user);
  }

  @Get('authorized')
  @Roles('user')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  public async authorized(): Promise<any> {
    console.log('Authorized route...');
    return {'message': 'Hello'};
  }
}
