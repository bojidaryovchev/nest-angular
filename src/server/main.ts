import './polyfills';

import { enableProdMode } from '@angular/core';
import { NestFactory } from '@nestjs/core';
import * as e from 'express';

import { ApplicationModule } from './app.module';
import { Config } from './config/config';

async function bootstrap() {
  const express = e();

  if (process.env.NODE_ENV === 'production') {
    enableProdMode();
  }

  const env = process.env.NODE_ENV || 'development';
  const config = Config[env];

  require('./config/index')(config, express);

  const app = await NestFactory.create(ApplicationModule, express);

  await app.listen(config.port);
}

bootstrap();
