import { Module } from '@nestjs/common';

import { StaticModule } from './modules/static/static.module';
import { SERVER_CONFIG } from './server.constants';
import { DatabaseModule } from './modules/database/database.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    DatabaseModule,
    AuthModule,
    UserModule,
    StaticModule
  ],
  controllers: [],
  components: [],
})
export class ApplicationModule {}
