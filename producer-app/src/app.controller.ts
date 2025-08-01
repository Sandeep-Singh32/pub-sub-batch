import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  sendMessage(@Body() payload: any) {
    return this.appService.sendMessage(payload);
  }

  @MessagePattern('wapas-message')
  handleMessage(@Body() data: any): void {
    console.log('Received message from the consumer app:', data);
    // Here you can process the received message
  }
}
