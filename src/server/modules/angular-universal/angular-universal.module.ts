import {
  Module,
  Inject,
  MiddlewaresConsumer,
  RequestMethod,
} from '@nestjs/common';
import { DynamicModule, NestModule } from '@nestjs/common/interfaces';
import * as express from 'express';

import { IAngularUniversalOptions } from './interfaces/angular-universal-options.interface';
import { ANGULAR_UNIVERSAL_OPTIONS } from './angular-universal.constants';
import { AngularUniversalController } from './angular-universal.controller';
import { angularUniversalProviders } from './angular-universal.providers';
import { FOLDER_DIST_BROWSER } from '../../../shared/shared.constants';

@Module({
  controllers: [AngularUniversalController],
  components: [...angularUniversalProviders],
})
export class AngularUniversalModule implements NestModule {
  constructor(
    @Inject(ANGULAR_UNIVERSAL_OPTIONS) private readonly ngOptions: IAngularUniversalOptions
  ) {}

  static forRoot(): DynamicModule {
    const options: IAngularUniversalOptions = {
      viewsPath: FOLDER_DIST_BROWSER,
      bundle: require('../../../../dist/server/main.js')
    };

    return {
      module: AngularUniversalModule,
      components: [
        {
          provide: ANGULAR_UNIVERSAL_OPTIONS,
          useValue: options,
        }
      ]
    };
  }

  configure(consumer: MiddlewaresConsumer): void {
    consumer
      .apply(express.static(this.ngOptions.viewsPath))
      .forRoutes({ path: '*.*', method: RequestMethod.GET });
  }
}
