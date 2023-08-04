import { MessengerEventType } from "./MessengerEventType.enum";

export interface MessengerEvent {
  eventType: MessengerEventType;
  payload: string;
}
