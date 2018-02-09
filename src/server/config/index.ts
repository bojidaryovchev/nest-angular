import { IEnvironmentConfig } from './config';
import { Application } from 'express';

module.exports = (config: IEnvironmentConfig, express: Application) => {
  require('./database')(config);
  require('./middlewares')(config, express);
  require('./express')(config, express);
  // require('./config/routes')(config, app);
  // require('./config/passport')();
};
