import { Injectable } from '@nestjs/common';
import { MessageDto } from './message.dto';

@Injectable()
export class AppService {

  handleMessageSent(order: MessageDto) {
    console.log(`Received a new message - customer: ${order.msisdn}`);
  }
}
