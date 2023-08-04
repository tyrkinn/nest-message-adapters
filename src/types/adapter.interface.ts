import { MessengerEvent } from "./messenger-event.interface";

export interface IAdapter<T> {
  process_event(jsonMessage: T): MessengerEvent;
}
