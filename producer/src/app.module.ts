import { Module } from '@nestjs/common';
import { MessageModule } from './messages/message.module';

@Module({
  imports: [MessageModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
