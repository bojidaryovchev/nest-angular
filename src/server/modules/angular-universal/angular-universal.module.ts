import {
  Module,
  Inject,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { DynamicModule, NestModule } from '@nestjs/common/interfaces';
import * as express from 'express';

import { IAngularUniversalOptions } from './interfaces/angular-universal-options.interface';
import { ANGULAR_UNIVERSAL_OPTIONS } from './angular-universal.constants';
import { AngularUniversalController } from './angular-universal.controller';
import { angularUniversalProviders } from './angular-universal.providers';
import { FOLDER_DIST_BROWSER } from '../../../shared/shared.constants';
import { HTTP_SERVER_REF } from '@nestjs/core';

@Module({
  controllers: [AngularUniversalController],
  providers: [...angularUniversalProviders],
})
export class AngularUniversalModule implements NestModule {
  constructor(
    @Inject(ANGULAR_UNIVERSAL_OPTIONS) private readonly ngOptions: IAngularUniversalOptions,
    @Inject(HTTP_SERVER_REF) private readonly serverRef: express.Application
  ) {
    this.serverRef.get('*.*', express.static(this.ngOptions.viewsPath));
  }

  static forRoot(): DynamicModule {
    const options: IAngularUniversalOptions = {
      viewsPath: FOLDER_DIST_BROWSER,
      bundle: require('../../../../dist/server/main.js')
    };

    return {
      module: AngularUniversalModule,
      providers: [
        {
          provide: ANGULAR_UNIVERSAL_OPTIONS,
          useValue: options,
        }
      ]
    };
  }

  configure(consumer: MiddlewareConsumer): void {
    // consumer
    //   .apply(express.static(this.ngOptions.viewsPath))
    //   .forRoutes('*.*');
  }
}
