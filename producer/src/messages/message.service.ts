import { Inject, Injectable } from '@nestjs/common';
import { MessageDto } from './message.dto';
import { ClientProxy } from '@nestjs/microservices';
import { timeout } from 'rxjs';

@Injectable()
export class MessageService {
  constructor(@Inject('MESSAGE_SERVICE') private rabbitClient: ClientProxy) {}
  async sendMessage(messages: MessageDto[]) {
    for (const message of messages) {
      await this.sendMessageIndividual(message);
    }

    return { message: 'Messages sent!' };
  }

  private async sendMessageIndividual(message: MessageDto) {
    try {
      await this.rabbitClient.emit('message-sent', message);
      console.log('Message sent:', message);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  }
}
