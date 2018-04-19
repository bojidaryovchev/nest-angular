import { NestApplication } from '@nestjs/core';
import { EXPRESS_REF } from '@nestjs/core/injector';

import { setupUniversal } from './utils/setup-universal.utils';
import { ANGULAR_UNIVERSAL_OPTIONS } from './angular-universal.constants';
import { IAngularUniversalOptions } from './interfaces/angular-universal-options.interface';

export const angularUniversalProviders = [
  {
    provide: 'UNIVERSAL_INITIALIZER',
    useFactory: (app: NestApplication, options: IAngularUniversalOptions) => setupUniversal(app, options),
    inject: [EXPRESS_REF, ANGULAR_UNIVERSAL_OPTIONS]
  }
];
