import {
  Module,
  NestModule,
  MiddlewaresConsumer,
  RequestMethod,
} from '@nestjs/common';
import { authenticate } from 'passport';
import { LocalStrategy } from './passport/local.strategy';
import { JwtStrategy } from './passport/jwt.strategy';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  imports: [],
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
      .apply(authenticate('local', { session: false }))
      .forRoutes({ path: 'api/auth/signin', method: RequestMethod.POST });

    consumer
      .apply(authenticate('jwt', { session: false }))
      .forRoutes({ path: 'api/auth/authorized', method: RequestMethod.ALL });
  }
}
