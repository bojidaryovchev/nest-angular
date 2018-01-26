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

/**
 * 
  "codelyzer": "^4.1.0",
    "concurrently": "^3.5.1",
    "google-closure-compiler-js": "^20180101.0.0",
    "jasmine-core": "^2.9.1",
    "jasmine-spec-reporter": "^4.2.1",
    "karma": "^2.0.0",
    "karma-chrome-launcher": "^2.2.0",
    "karma-cli": "^1.0.1",
    "karma-coverage-istanbul-reporter": "^1.3.3",
    "karma-jasmine": "^1.1.1",
    "karma-jasmine-html-reporter": "^0.2.2",
    "node-sass": "^4.7.2",
    "nodemon-webpack-plugin": "^0.1.6",
    "protractor": "^5.2.2",
    "ts-loader": "^3.2.0",
    "ts-node": "^4.1.0",
    "tslint": "^5.9.1",
    "tslint-loader": "^3.5.3",
    "typescript": "^2.6.2",
    "webpack": "^3.10.0",
    "webpack-node-externals": "^1.6.0"


    // "@nestjs/common": "^4.5.9",
    // "@nestjs/core": "^4.5.10",
    // "@nestjs/microservices": "^4.5.8",
    // "@nestjs/testing": "^4.5.5",
    // "@nestjs/websockets": "^4.5.8",
    // "body-parser": "^1.18.2",
    // "bootstrap": "^3.3.7",
    // "cookie-parser": "^1.4.3",
    // "core-js": "^2.5.3",
    // "express": "^4.16.2",
    // "express-session": "^1.15.6",
    // "mongoose": "^4.13.9",
    // "passport": "^0.4.0",
    // "passport-local": "^1.0.0",
    // "redis": "^2.8.0",
    // "reflect-metadata": "0.1.10",
    // "rxjs": "^5.5.6",
    // "zone.js": "^0.8.20"
 */