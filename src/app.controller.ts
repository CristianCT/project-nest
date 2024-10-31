import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('API')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/search/:dayli')
  getHello(@Param() params): string {
    console.log(this.appService.getHello(params.dayli));
    return this.appService.getHello(params.dayli);
  }
}
