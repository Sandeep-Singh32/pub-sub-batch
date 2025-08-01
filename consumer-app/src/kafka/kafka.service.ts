import { Inject, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaService implements OnModuleInit {
  private logger = new Logger(KafkaService.name);

  constructor(
    @Inject('KAFKA_PRODUCER') private readonly kafkaClient: ClientKafka,
  ) {}
  async onModuleInit() {
    await this.kafkaClient.connect();
  }

  sendMessage(topic: string, message: any) {
    this.logger.log(`Sending message from consumer app to topic ${topic}: ${JSON.stringify(message)}`);
    this.kafkaClient.emit(topic, message);
  }
}
