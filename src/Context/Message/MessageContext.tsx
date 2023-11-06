"use client";
import React from "react";
import {
  Message,
  IMessageContext,
  IMessageProvider,
} from "./MessageContext.structure";

const MessageContext = React.createContext({} as IMessageContext);

function MessageProvider({ children }: IMessageProvider) {
  const [message, setMessage] = React.useState({} as Message);

  return (
    <MessageContext.Provider
      value={React.useMemo(
        () => ({
          message,
          setMessage,
        }),
        [message, setMessage]
      )}
    >
      {children}
    </MessageContext.Provider>
  );
}

function useAddress() {
  const context = React.useContext(MessageContext);
  if (!context) {
    throw new Error("useAddress must be used within a SettingsProvider");
  }

  return context;
}

export { MessageProvider, useAddress, MessageContext };
