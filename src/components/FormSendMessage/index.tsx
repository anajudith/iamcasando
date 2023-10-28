"use client";
import React from "react";
import {
  ButtonGeral,
  ButtonRedirectPage,
  InputMessage,
  InputName,
} from "@/components";

export default function FormSendMessage() {
  const [message, setMessage] = React.useState("" as string);
  const handleSubmit = () => {};

  console.log(message, "message");
  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    setMessage(newValue);
    // if (onChange) {
    //   onChange(event); // chama a função de onChange se estiver definida
    // }
  };

  return (
    <section className="bg-pink-100 w-full justify-center items-center flex content-center py-[60px]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-[30px] w-[250px]"
      >
        <InputName name="name" label="Nome completo" type="text" />
        <InputName name="email" label="Email *" type="email" />
        <InputMessage
          onChange={handleInputChange}
          value={message}
          name="message"
          label="Mensagem"
          type="text"
          className="h-[150px]"
        />
        {/* <InputEmail /> */}
        <ButtonGeral type="submit" title="Enviar mensagem" />
      </form>
    </section>
  );
}
