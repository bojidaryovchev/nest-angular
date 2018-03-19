import * as e from 'express';
import { join } from 'path';
import { IEnvironmentConfig } from './config';
import { FOLDER_DIST_BROWSER, FOLDER_DIST_SERVER } from '../../shared/shared.constants';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('../../../dist/server/main.bundle.js');

module.exports = (config: IEnvironmentConfig, express: e.Application) => {
  express.get('*.*', e.static(FOLDER_DIST_BROWSER));
  express.set('view engine', 'html');
  express.set('views', FOLDER_DIST_BROWSER);
  express.engine('html', ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [
      provideModuleMap(LAZY_MODULE_MAP)
    ]
  }));
  express.disable('x-powered-by');
};
