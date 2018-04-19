import { Controller, Get, Res, Req, Inject } from '@nestjs/common';
import { Response, Request } from 'express';
import { join } from 'path';

import { ANGULAR_UNIVERSAL_OPTIONS } from './angular-universal.constants';
import { IAngularUniversalOptions } from './interfaces/angular-universal-options.interface';

@Controller()
export class AngularUniversalController {
  constructor(
    @Inject(ANGULAR_UNIVERSAL_OPTIONS) private readonly ngOptions: IAngularUniversalOptions,
  ) {}

  @Get('*')
  render(@Res() res: Response, @Req() req: Request) {
    res.render(join(this.ngOptions.viewsPath, 'index.html'), { req });
  }
}