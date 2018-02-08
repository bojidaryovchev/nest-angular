import { Controller, Get, Req, Res } from '@nestjs/common';
import { FOLDER_DIST_BROWSER } from '../../../shared/constants';
import { join } from 'path';
import * as e from 'express';

@Controller()
export class StaticController {
  @Get('*')
  all(@Res() res: e.Response, @Req() req: e.Request) {
    res.render(join(FOLDER_DIST_BROWSER, 'index.html'), { req });
  }
}
