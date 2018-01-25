import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import { Config } from './config/config';
import * as e from 'express';

async function bootstrap() {
  const express = e();
  const app = await NestFactory.create(ApplicationModule, express);

  const env = process.env.NODE_ENV || 'development';
  const config = Config[env];

  require('./config/database')(config);
  require('./config/express')(config, app, express);
  // require('./config/routes')(config, app);
  // require('./config/passport')();

  await app.listen(config.port);
}
bootstrap();
