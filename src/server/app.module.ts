// nest
import { Module } from '@nestjs/common';

// modules
import { AuthModule } from './modules/auth/auth.module';
import { DatabaseModule } from './modules/database/database.module';
import { UserModule } from './modules/user/user.module';
import { AngularUniversalModule } from './modules/angular-universal/angular-universal.module';

@Module({
  imports: [
    DatabaseModule,
    AuthModule,
    UserModule,
    AngularUniversalModule.forRoot()
  ],
  controllers: [],
  components: [],
})
export class ApplicationModule {}
