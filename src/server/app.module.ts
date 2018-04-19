// nest
import { Module } from '@nestjs/common';

// modules
import { AuthModule } from './modules/auth/auth.module';
import { DatabaseModule } from './modules/database/database.module';
import { UserModule } from './modules/user/user.module';
import { StaticModule } from './modules/static/static.module';

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
