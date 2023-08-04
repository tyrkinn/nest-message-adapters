import { Chat } from "./chat.type";
import { User } from "./user.type";

export type Message = {
  message_id: number;
  message_thread_id: number;
  from: User;
  sender_chat: Chat;
  date: number;
  text: string;
}
