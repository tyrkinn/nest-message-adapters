import { IAdapter } from "src/types/adapter.interface";
import { MessengerEvent } from "src/types/messenger-event.interface";
import { TelegramWebhookEvent } from "./types/webhook-event.type";
import { MessengerEventType } from "src/types/MessengerEventType.enum";



export class TelegramAdapter implements IAdapter<TelegramWebhookEvent> {

  public EVENT_TYPE = TelegramWebhookEvent

  process_event(jsonMessage: TelegramWebhookEvent): MessengerEvent {

    if (jsonMessage.message) {

      return {
        eventType: MessengerEventType.NEW_MESSAGE,
        payload: jsonMessage.message.text
      }

    }

    return {
      eventType: MessengerEventType.UNKNOWN,
      payload: ""
    }

  }

}
