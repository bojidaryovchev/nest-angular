import * as e from 'express';
import { join } from 'path';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';
import { initialize, session as passportSession } from 'passport';

import { IEnvironmentConfig } from './config';

module.exports = (config: IEnvironmentConfig, app: e.Application) => {
  app.use(cookieParser());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(session({
    secret: config.sessionSecret,
    resave: true,
    saveUninitialized: true
  }));
  app.use(initialize());
  app.use(passportSession());
  app.use(e.static(join(config.rootPath, 'public')));
};
