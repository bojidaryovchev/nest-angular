import * as e from 'express';
import { Config } from './config/config';

const env = process.env.NODE_ENV || 'development';
const config = Config[env];
const app: e.Application = e();

require('./config/database')(config);
require('./config/express')(config, app);
require('./config/routes')(config, app);
require('./config/passport')();

export {
  app,
  config
};
