import { Controller, Get } from '@nestjs/common';

import { Message } from '@vts-workspace/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }

  @Get('hellos')
  getArray(): Promise<Message[]> {
    return this.appService.getDatas();
  }

  @Get('classes')
  getClasses(): Promise<any[]> {
    return this.appService.getClasses();
  }
}
