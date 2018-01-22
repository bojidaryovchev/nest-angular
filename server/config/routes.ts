import { Application, Request, Response } from 'express';
import { join } from 'path';
import controllers = require('../controllers/controllers');
import { IEnvironmentConfig } from './config';

module.exports = (config: IEnvironmentConfig, app: Application) => {
  // app.get('/api/index', controllers.home.index);

  app.all('*', (req: Request, res: Response) => {
    res.sendFile(join(config.rootPath, 'dist/index.html'));
  });
};
