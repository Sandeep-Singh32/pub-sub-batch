import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('send-notifications')
  sendNotifcations(@Payload() data): void {
    this.appService.sendNotifcations(data);
  }
}
