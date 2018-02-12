import { use } from 'passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Component, HttpStatus } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { Request } from 'express';
import { JWT_SECRET } from '../../../server.constants';

@Component()
export class JwtStrategy extends Strategy {
  constructor(private readonly authService: AuthService) {
    super(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        passReqToCallback: true,
        secretOrKey: JWT_SECRET,
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