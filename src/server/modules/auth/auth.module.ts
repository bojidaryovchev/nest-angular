import {
  Module,
  NestModule,
  MiddlewaresConsumer,
  RequestMethod,
} from '@nestjs/common';
import { authenticate } from 'passport';

// Strategies
import { LocalStrategy } from './passport/local.strategy';
import { JwtStrategy } from './passport/jwt.strategy';
import { FacebookStrategy } from './passport/facebook.strategy';
import { TwitterStrategy } from './passport/twitter.strategy';
import { GoogleStrategy } from './passport/google-plus.strategy';

import { UserModule } from '../user/user.module';
import { authProviders } from './auth.providers';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { bodyValidatorMiddleware } from './middlewares/body-validator.middleware';

@Module({
  imports: [UserModule],
  components: [
    ...authProviders,
    AuthService,
    LocalStrategy,
    JwtStrategy,
    FacebookStrategy,
    TwitterStrategy,
    GoogleStrategy
  ],
  controllers: [AuthController],
  exports: [AuthService]
})
export class AuthModule implements NestModule {
  public configure(consumer: MiddlewaresConsumer) {
    consumer
      .apply([
        bodyValidatorMiddleware,
        authenticate('local-signup', { session: false })
      ])
      .forRoutes({ path: 'api/auth/local/signup', method: RequestMethod.POST });

    consumer
      .apply([
        bodyValidatorMiddleware,
        authenticate('local-signin', { session: false })
      ])
      .forRoutes({ path: 'api/auth/local/signin', method: RequestMethod.POST });

    consumer
      .apply(authenticate('facebook', { session: false }))
      .forRoutes({ path: 'api/auth/facebook/token', method: RequestMethod.POST });

    consumer
      .apply(authenticate('twitter', { session: false }))
      .forRoutes({ path: 'api/auth/twitter/token', method: RequestMethod.POST });

    consumer
      .apply(authenticate('google', { session: false }))
      .forRoutes({ path: 'api/auth/google/token', method: RequestMethod.POST });

    consumer
      .apply(authenticate('jwt', { session: false }))
      .forRoutes({ path: 'api/auth/authorized', method: RequestMethod.ALL });
  }
}
