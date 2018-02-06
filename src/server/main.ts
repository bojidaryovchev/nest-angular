import './polyfills';

import { enableProdMode } from '@angular/core';
import { NestFactory } from '@nestjs/core';
import * as e from 'express';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { ApplicationModule } from './app.module';
import { Config } from './config/config';

async function bootstrap() {
  const express = e();

  if (process.env.NODE_ENV === 'production') {
    enableProdMode();
    renderServerSide(express);
  }

  const app = await NestFactory.create(ApplicationModule, express);

  const env = process.env.NODE_ENV || 'development';
  const config = Config[env];

  require('./config/database')(config);
  require('./config/express')(config, app, express);
  // require('./config/routes')(config, app);
  // require('./config/passport')();

  await app.listen(config.port);
}

function renderServerSide(app: e.Application) {
  const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('../../dist/server/main.bundle.js');
  const { provideModuleMap } = require('@nguniversal/module-map-ngfactory-loader');

  app.engine('html', ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [
      provideModuleMap(LAZY_MODULE_MAP)
    ]
  }));
}

bootstrap();
