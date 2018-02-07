import { Controller, Get, Req, Res } from '@nestjs/common';
import { FOLDER_DIST_BROWSER } from '../../../shared/constants';
import { join } from 'path';
import { createReadStream } from 'fs';
import * as e from 'express';

@Controller()
export class StaticController {
  @Get('*')
  all(@Res() res: e.Response, @Req() req: e.Request) {
    const index: string = join(FOLDER_DIST_BROWSER, 'index.html');

    if (process.env.NODE_ENV === 'production') {
      res.render(index, { req });
    } else {
      createReadStream(index).pipe(res);
    }
  }
}
