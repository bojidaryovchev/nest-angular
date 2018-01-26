import { Get, Controller, Response as Res } from '@nestjs/common';
import {Response} from 'express';
import {join} from 'path';
import {createReadStream} from 'fs';

@Controller()
export class AppController {
  @Get('*')
  all(@Res() res: Response) {
    res.sendFile(join(process.cwd(), 'dist/index.html'));
  }
}
