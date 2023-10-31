import React from "react";
import { ButtonGeral, InputMessage, InputName } from "@/components";
import Messages from "@/service/Messages";
import { supabaseApi } from "@/service/Api";
import { MessageContext } from "@/Context/Message/MessageContext";

interface IMessage {
  id: string;
  message: string;
  name: string;
  email: string;
}

export default function FormSendMessage() {
  const { message, setMessage } = React.useContext(MessageContext);

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  // const [message, setMessage] = React.useState("");
  const [error, setError] = React.useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await addNote(message, name, email);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    setMessage(newValue);
  };

  const fetchNotes = async () => {
    // const { data } = await supabaseApi.from("messages").select("*");
    // if (data) {
    //   const messages = data.map((item) => item.message).join("\n");
    //   setMessage(messages);
    // }
  };

  const addNote = React.useCallback(
    async (noteTitle: string, name: string, email: string) => {
      try {
        const newNote: IMessage = {
          id: crypto.randomUUID(),
          name,
          email,
          message: noteTitle,
        };

        const response = await Messages.postMessage(
          newNote.id,
          newNote.name,
          newNote.email,
          newNote.message
        );
        // const responseGet = await Messages.getMessage();
        // console.log(responseGet, "peguei aqui");

        // if (!responseGet) {
        //   setError("Deu erro");
        // }

        await fetchNotes();
        return response;
      } catch (error) {
        console.error("Error:", error);
      }
    },
    []
  );

  return (
    <section className="bg-pink-100 w-full justify-center items-center flex content-center py-[60px]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-[30px] w-[250px]"
      >
        <InputName
          name="name"
          label="Nome completo"
          type="text"
          value={name}
          onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
            setName(e.target.value)
          }
        />
        <InputName
          name="email"
          label="Email *"
          type="email"
          value={email}
          onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
            setEmail(e.target.value)
          }
        />
        <InputMessage
          onChange={handleInputChange}
          value={message}
          name="message"
          label="Mensagem"
          type="text"
          className="h-[150px]"
        />

        <ButtonGeral type="submit" title="Enviar mensagem" />
      </form>
    </section>
  );
}
