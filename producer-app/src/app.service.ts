import { Injectable } from '@nestjs/common';
import { KafkaService } from './kafka/kafka.service';

@Injectable()
export class AppService {
  constructor(private readonly kafkaService: KafkaService) {}
  sendMessage(message: any): { message: string } {
    this.kafkaService.sendMessage('send-notifications', message);
    return {
      message: 'Sent message to Kafka',
    };
  }
}
