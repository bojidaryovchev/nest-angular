import { Component, UnauthorizedException } from '@nestjs/common';
import { use } from 'passport';
import { Strategy } from 'passport-local';
import { IUser } from '../../user/interfaces/user.interface';
import { User } from '../../user/models/user.model';
import { generateHashedPassword, generateSalt } from '../../../utilities/encryption';
import { MESSAGES } from '../../../server.constants';

@Component()
export class LocalStrategy {
  constructor() {
    this.init();
  }

  private init(): void {
    use('local-signup', new Strategy({
      usernameField: 'email',
      passwordField: 'password'
    }, async (email: string, password: string, done: Function) => {
      try {
        if (await User.findOne({ 'local.email': email })) {
          return done(new UnauthorizedException(MESSAGES.UNAUTHORIZED_EMAIL_IN_USE), false);
        }

        const salt: string = generateSalt();
        const user: IUser = new User({
          method: 'local',
          local: {
            email,
            salt,
            hashedPassword: generateHashedPassword(salt, password)
          }
        });

        await user.save();

        done(null, user);
      } catch (error) {
        done(error, false);
      }
    }));

    use('local-signin', new Strategy({
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

        done(null, user);
      } catch (error) {
        done(error, false);
      }
    }));
  }
}
