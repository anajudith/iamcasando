"use client";
import React from "react";
import { Message, MessageContextValue } from "./MessageContext.structure";

export const MessageContext = React.createContext<MessageContextValue>(null!);

export const MessageProvider = ({ children }: { children: JSX.Element }) => {
  //   const [message, setMessage] = React.useState<Message[]>([]);
  const [message, setMessage] = React.useState("" as string);

  const contextValue: MessageContextValue = {
    message,
    setMessage,
  };

  return (
    <MessageContext.Provider value={contextValue}>
      {children}
    </MessageContext.Provider>
  );
};
