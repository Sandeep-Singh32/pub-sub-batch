import { Injectable } from '@nestjs/common';
import { KafkaService } from './kafka/kafka.service';

@Injectable()
export class AppService {
  constructor(private readonly kafkaService: KafkaService){}
  sendNotifcations(data: any): void {
    console.log('Received data:', data);
    console.log('Notification sent successfully');

    // Here you can process the received data and send notifications
    //send back the response to the producer app
    this.kafkaService.sendMessage('wapas-message', {
      message: 'Notification sent successfully',
    });
  }
}
