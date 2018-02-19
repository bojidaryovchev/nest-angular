import { json, urlencoded } from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import { Application } from 'express';
import * as helmet from 'helmet';
import { IEnvironmentConfig } from './config';

module.exports = (config: IEnvironmentConfig, app: Application) => {
  app.use(cookieParser());
  app.use(cors());
  app.use(helmet());
  app.use(json());
  app.use(urlencoded({ extended: true }));
};
