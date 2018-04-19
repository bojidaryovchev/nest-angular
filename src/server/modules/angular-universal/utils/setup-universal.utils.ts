import { NestApplication } from '@nestjs/core';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

import { IAngularUniversalOptions } from '../interfaces/angular-universal-options.interface';

export function setupUniversal(app: NestApplication, ngOptions: IAngularUniversalOptions) {
  const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = ngOptions.bundle;

  app.set('view engine', 'html');
  app.set('views', ngOptions.viewsPath);
  app.engine('html', ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [
      provideModuleMap(LAZY_MODULE_MAP)
    ]
  }));
}
