import { Controller, Get, Res, Req } from '@nestjs/common';
import * as e from 'express';
import {join} from 'path';
import {createReadStream} from 'fs';
import {FOLDER_DIST_BROWSER} from '../shared/constants';

@Controller()
export class AppController {
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
