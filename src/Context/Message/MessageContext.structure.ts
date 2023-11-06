export interface Message {
  id: string;
  message: string;
  name: string;
  email: string;
}

export interface IMessageContext {
  message: Message;
  setMessage: React.Dispatch<React.SetStateAction<Message>>;
}

export interface IMessageProvider {
  children: React.ReactNode;
}
