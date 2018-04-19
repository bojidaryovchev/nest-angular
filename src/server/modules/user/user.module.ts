import { Module } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';
import { UserController } from './user.controller';
import { userProviders } from './user.providers';
import { UserService } from './user.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  components: [
    ...userProviders,
    UserService,
  ],
  exports: [
    ...userProviders
  ]
})
export class UserModule {}
