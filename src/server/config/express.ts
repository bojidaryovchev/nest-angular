import { Application } from 'express';
import { IEnvironmentConfig } from './config';

module.exports = (config: IEnvironmentConfig, express: Application) => {
  express.disable('x-powered-by');
};
