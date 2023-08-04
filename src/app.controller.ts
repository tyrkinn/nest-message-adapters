import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { TelegramAdapter } from './adapters/telegram/telegram.adapter';
import { IAdapter } from './types/adapter.interface';


const ADAPTERS = {
  "telegram": TelegramAdapter
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post('/webhook/:provider')
  async webhook(@Body() event, @Param('provider') provider: keyof typeof ADAPTERS) {

    if (!Object.keys(ADAPTERS).includes(provider)) {
      return "Not ok"
    }

    const adapter = new (ADAPTERS[provider])();
    const processedEvent = adapter.process_event(event)

    console.log("Processed Event: ", processedEvent)

    return "Ok"
  }

}


// /webhook/telegram
