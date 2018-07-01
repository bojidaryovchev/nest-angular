import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { AuthService } from '../auth.service';
import { SERVER_CONFIG } from '../../../server.constants';
import { IUser } from '../../user/interfaces/user.interface';
import { IJwtPayload } from '../interfaces/jwt-payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: SERVER_CONFIG.jwtSecret
    });
  }

  public async validate(payload: IJwtPayload, done: Function) {
    const user: IUser = await this.authService.findUserById(payload.sub);

    if (!user) {
      return done(new UnauthorizedException(), false);
    }

    done(null, user);
  }
}