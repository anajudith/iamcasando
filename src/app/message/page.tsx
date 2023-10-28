import { FormSendMessage, SubTitleCommon, TitleCommon } from "@/components";
import Image from "next/image";
import React from "react";
import folha from "@/assets/images/folha.png";

export default function Message() {
  return (
    <div className="pt-300px pb-[100px] flex flex-col justify-center items-center pt-[100px] text-slate-950">
      <TitleCommon title="Deixe sua mensagem de carinho para nós" />
      <SubTitleCommon
        className="pt-[30px] px-[100px]"
        subTitle="PALAVRAS SÃO CARINHOS DOADOS. OBRIGADO POR NOS DAR O SEU CARINHO. IREMOS LEMBRAR PARA SEMPRE DESTE MOMENTO TÃO ESPERADO."
      />
      <Image
        src={folha}
        alt="folha ao centro"
        width={170}
        height={170}
        className="py-[60px]"
      />
      <FormSendMessage />
      <TitleCommon
        title="Nenhuma mensagem recebida. Deixe a primeira!"
        className="pt-[30px] pb-[30px]  border-b-2 border-slate-500"
      />
    </div>
  );
}
