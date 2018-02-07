import { Controller, Get } from '@nestjs/common';

@Controller('api')
export class ApiController {
  @Get('getStuff')
  getStuff() {
    return {
      stuff: ['a', 'b', 'c', 'd']
    };
  }
}
