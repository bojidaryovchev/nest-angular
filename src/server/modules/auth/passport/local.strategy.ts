import { Component, UnauthorizedException } from '@nestjs/common';
import { use } from 'passport';
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
          done(new UnauthorizedException(MESSAGES.UNAUTHORIZED_INVALID_EMAIL), false);
        }

        if (generateHashedPassword(user.local.salt, password) !== user.local.hashedPassword) {
          done(new UnauthorizedException(MESSAGES.UNAUTHORIZED_INVALID_PASSWORD), false);
        }

        done(null, user);
      } catch (error) {
        done(error, false);
      }
    }));
  }
}
