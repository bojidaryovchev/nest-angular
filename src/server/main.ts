import './polyfills';

import { enableProdMode } from '@angular/core';
import { NestFactory } from '@nestjs/core';
import * as e from 'express';

import { ApplicationModule } from './app.module';
import { SERVER_CONFIG } from './server.constants';
import { ValidationPipe } from './modules/common/pipes/validation.pipe';

async function bootstrap() {
  const express: any = e();

  if (process.env.NODE_ENV === 'production') {
    enableProdMode();
  }

  require('./config/index')(SERVER_CONFIG, express);

  const app = await NestFactory.create(ApplicationModule, express);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(SERVER_CONFIG.port);
}

bootstrap();
