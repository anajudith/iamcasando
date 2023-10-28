import Image from "next/image";
import React from "react";
import banner from "@/assets/images/banner.png";
import Countdown from "@/components/Countdown";
import folha from "@/assets/images/folha.png";
import { ButtonRedirectPage, SubTitleCommon, TitleCommon } from "@/components";

function PageInit() {
  const targetDate = "2024-10-19T00:00:00";
  return (
    <div className="flex flex-col pb-[100px]">
      <Image
        className=" w-full border-r border-gray-20 flex justify-start items-center bg-center bg-cover"
        src={banner}
        alt="Apresentation of the pair"
        // automatically provided
        // automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
      <Countdown targetDate={targetDate} />
      <div className="flex flex-col justify-center items-center pt-[40px] gap-8">
        <TitleCommon title="Sejam bem-vindos ao nosso site!" />
        <SubTitleCommon subTitle=" A MELHOR FORMA DE COMPARTILHAR ESSE MOMENTO COM VOCÊS É UNINDO SONHOS." />
        <Image
          src={folha}
          alt="folha ao centro"
          width={170}
          height={170}
          className="py-[60px]"
        />
        <span className="px-[130px] leading-8 font-semibold text-justify">
          Aqui vamos contar à vocês, queridos amigos e familiares, os momentos
          mais marcantes da nossa história de amor. A contagem regressiva
          começa, o frio na barriga e toda a ansiedade do dia mais esperado de
          nossas vidas nos enche de alegria em tê-los ao nosso lado. Vamos
          juntos nesse grande sonho, o dia em que uniremos nossas almas e corpos
          para sempre, o dia do nosso casamento.
        </span>
        <TitleCommon
          className={"pt-[60px] pb-[30px]"}
          title="Deixe sua mensagem de carinho para nós"
        />
        <SubTitleCommon
          className="justify-center flex items-center text-center px-[100px]"
          subTitle="PALAVRAS SÃO CARINHOS DOADOS. OBRIGADO POR NOS DAR O SEU CARINHO. IREMOS LEMBRAR PARA SEMPRE DESTE MOMENTO TÃO ESPERADO."
        />
        <Image
          src={folha}
          alt="folha ao centro"
          width={170}
          height={170}
          className="py-[60px]"
        />
        <span className="font-semibold">
          Nenhuma mensagem recebida. Deixe a primeira!!!
        </span>
        <ButtonRedirectPage href="/message" />
      </div>
    </div>
  );
}

export default PageInit;
