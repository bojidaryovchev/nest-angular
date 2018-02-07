import { Module } from '@nestjs/common';

import { ApiModule } from './modules/api/api.module';
import { StaticModule } from './modules/static/static.module';

@Module({
  imports: [ApiModule, StaticModule],
  controllers: [],
  components: [],
})
export class ApplicationModule {}
