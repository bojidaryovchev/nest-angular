import { use } from 'passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Component, HttpStatus } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { Request } from 'express';
import { SERVER_CONFIG } from '../../../server.constants';

@Component()
export class JwtStrategy extends Strategy {
  constructor(private readonly authService: AuthService) {
    super(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        passReqToCallback: true,
        secretOrKey: SERVER_CONFIG.jwtSecret,
      },
      async (req: Request, payload: any, next: Function) => await this.verify(req, payload, next),
    );
    use(this);
  }

  public async verify(req: Request, payload: any, done: Function) {
    const isValid = await this.authService.validateUser(payload);
    if (!isValid) {
      return done(HttpStatus.UNAUTHORIZED, false);
    }
    done(null, payload);
  }
}