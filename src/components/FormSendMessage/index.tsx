import React from "react";
import { ButtonGeral, InputMessage, InputName } from "@/components";
import Messages from "@/service/Messages";
import { MessageContext } from "@/Context/Message/MessageContext";
import { useSession, signOut, signIn } from "next-auth/react";
import { supabaseApi } from "@/service/Api";
import { IMessage } from "./FormSendMessage.structure";

export default function FormSendMessage() {
  const { data: session } = useSession();

  const [error, setError] = React.useState("" as string);
  const [name, setName] = React.useState("" as string);
  const [email, setEmail] = React.useState("" as string);
  const [text, setText] = React.useState("" as string);

  const fetchNotes = async () => {
    const { data } = await supabaseApi.from("messages").select("*");

    if (!data) {
      setError("Deu erro");
    }
  };
  const getMessage = React.useCallback(async () => {
    const responseGet = await Messages.getMessage();
    if (Array.isArray(!responseGet)) {
      setError("Erro ao carregar as mensagens");
    }
    console.log(responseGet);
    return;
  }, []);

  const addMessage = React.useCallback(
    async (message: string, name: string, email: string) => {
      try {
        const newNote: IMessage = {
          id: crypto.randomUUID(),
          name,
          email,
          message,
        };

        const response = await Messages.postMessage(
          newNote.id,
          newNote.name,
          newNote.email,
          newNote.message
        );
        const responseGet = await Messages.getMessage();
        if (!responseGet) {
          setError("Deu erro");
        }
        await fetchNotes();

        return response;
      } catch (error) {
        console.error("Error:", error);
      }
    },
    []
  );

  React.useEffect(() => {
    getMessage();
    supabaseApi
      .channel("table-db-changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "notes",
        },
        () => {
          fetchNotes();
        }
      )
      .subscribe();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !text) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    try {
      await addMessage(text, name, email);
      setName("");
      setEmail("");
      setText("");
      setError("");
      await getMessage();
    } catch (error) {
      console.error("Error:", error);
      setError(
        "Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde."
      );
    }
  };

  return (
    <section className="bg-pink-100 w-full justify-center gap-10 items-center flex content-center py-[60px]">
      <span className="text-4xl w-[600px] text-start">
        Deixe sua mensagem especial para os noivos, compartilhando seus desejos
        de felicidade e amor.
      </span>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-[30px] w-[250px]"
      >
        <InputName
          name="name"
          label="Nome completo"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputName
          name="email"
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputMessage
          name="message"
          label="Mensagem"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="h-[150px]"
        />

        <ButtonGeral type="submit" title="Enviar mensagem" />
      </form>
    </section>
  );
}
