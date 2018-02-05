import { Controller, Get, Response as Res, Request as Req } from '@nestjs/common';
import * as e from 'express';
import {join} from 'path';
import {createReadStream} from 'fs';
import {FOLDER_DIST_BROWSER} from '../shared/constants';

@Controller()
export class AppController {
  @Get('*')
  all(@Res() res: e.Response, @Req() req: e.Request) {
    createReadStream(join(FOLDER_DIST_BROWSER, 'index.html')).pipe(res);
  }
}
