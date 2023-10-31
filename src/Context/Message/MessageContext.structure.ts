export interface Message {
  id: string;
  message: string;
  name: string;
  email: string;
}

export type MessageContextValue = {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
};
