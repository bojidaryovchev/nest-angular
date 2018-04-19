import {
  Module,
  NestModule,
  MiddlewaresConsumer,
  RequestMethod,
} from '@nestjs/common';
import { authenticate } from 'passport';

import { UserModule } from '../user/user.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './passport/local.strategy';
import { JwtStrategy } from './passport/jwt.strategy';
import { AuthController } from './auth.controller';
import { bodyValidatorMiddleware } from './middlewares/body-validator.middleware';

@Module({
  imports: [UserModule],
  components: [
    AuthService,
    LocalStrategy,
    JwtStrategy
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
      .forRoutes({ path: 'api/auth/signup', method: RequestMethod.POST });

    consumer
      .apply([
        bodyValidatorMiddleware,
        authenticate('local-signin', { session: false })
      ])
      .forRoutes({ path: 'api/auth/signin', method: RequestMethod.POST });

    consumer
      .apply(authenticate('jwt', { session: false }))
      .forRoutes({ path: 'api/auth/authorized', method: RequestMethod.ALL });
  }
}
