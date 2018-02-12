import { IEnvironmentConfig } from './config';
import { Application } from 'express';

module.exports = (config: IEnvironmentConfig, express: Application) => {
  require('./middlewares')(config, express);
  require('./express')(config, express);
};
