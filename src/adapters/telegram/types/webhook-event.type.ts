import { Message } from "./message.type";

export class TelegramWebhookEvent {
  constructor(public update_id: number, public message: Message) { }
}
