import { Body, Controller, Get, Post } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageDto } from './message.dto';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post('send-message')
  placeMessage(@Body() message: MessageDto[]) {
    return this.messageService.sendMessage(message);
  }
}
