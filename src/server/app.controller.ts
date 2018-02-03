import { Get, Controller, Response as Res } from '@nestjs/common';
import {Response} from 'express';
import {join} from 'path';
import {createReadStream} from 'fs';
import {indexPage} from '../shared/constants';

@Controller()
export class AppController {
  @Get('*')
  all(@Res() res: Response) {
    createReadStream(indexPage).pipe(res);
  }
}
