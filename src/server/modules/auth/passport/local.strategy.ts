import { Component, UnauthorizedException } from '@nestjs/common';
import { use, serializeUser, deserializeUser } from 'passport';
import { Strategy } from 'passport-local';
import { IUser } from '../../user/interfaces/user.interface';
import { User } from '../../user/models/user.model';
import { generateHashedPassword } from '../../../utilities/encryption';
import { MESSAGES } from '../../../server.constants';

@Component()
export class LocalStrategy {
  constructor() {
    this.init();
  }

  private init(): void {
    use('local', new Strategy({
      usernameField: 'email',
      passwordField: 'password'
    }, async (email: string, password: string, done: Function) => {
      try {
        const user: IUser = await User.findOne({ 'local.email': email });

        if (!user) {
          return done(new UnauthorizedException(MESSAGES.UNAUTHORIZED_INVALID_EMAIL), false);
        }

        if (generateHashedPassword(user.local.salt, password) !== user.local.hashedPassword) {
          return done(new UnauthorizedException(MESSAGES.UNAUTHORIZED_INVALID_PASSWORD), false);
        }

        return done(null, user);
      } catch (error) {
        done(error, false);
      }
    }));

    serializeUser(async (user: IUser, done: Function) => {
      if (user) {
        return done(null, user._id);
      }
    });

    deserializeUser(async (id: string, done: Function) => {
      try {
        const user: IUser = await User.findById(id);

        if (!user) {
          return done(null, false);
        }

        return done(null, user);
      } catch (error) {
        done(error, false);
      }
    });
  }
}
