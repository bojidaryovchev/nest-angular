import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';
import { use } from 'passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { AuthService } from '../auth.service';
import { SERVER_CONFIG, MESSAGES } from '../../../server.constants';

@Injectable()
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
      return done(new UnauthorizedException(MESSAGES.UNAUTHORIZED_UNRECOGNIZED_BEARER), false);
    }
    done(null, payload);
  }
}