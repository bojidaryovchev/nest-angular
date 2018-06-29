import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';
import { use } from 'passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { AuthService } from '../auth.service';
import { SERVER_CONFIG, MESSAGES } from '../../../server.constants';
import { IUser } from '../../user/interfaces/user.interface';
import { IJwtPayload } from '../interfaces/jwt-payload.interface';

@Injectable()
export class JwtStrategy extends Strategy {
  constructor(private readonly authService: AuthService) {
    super(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        passReqToCallback: true,
        secretOrKey: SERVER_CONFIG.jwtSecret,
      },
      async (req: Request, payload: IJwtPayload, next: Function) =>
        await this.verify(payload, next)
    );
    use('jwt', this);
  }

  public async verify(payload: IJwtPayload, done: Function) {
    const user: IUser = await this.authService.findUserById(payload.sub);

    if (!user) {
      return done(new UnauthorizedException(MESSAGES.UNAUTHORIZED_UNRECOGNIZED_BEARER), false);
    }

    done(null, user);
  }
}