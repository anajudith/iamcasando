import { SubTitleCommon, TitleCommon } from "@/components";
import Image from "next/image";
import React from "react";
import folha from "@/assets/images/folha.png";

const descriptionText =
  "Aqui vamos contar à vocês, queridos amigos e familiares, os momentos mais marcantes da nossa história de amor. A contagem regressiva começa, o frio na barriga e toda a ansiedade do dia mais esperado de nossas vidas nos enche de alegria em tê-los ao nosso lado. Vamos juntos nesse grande sonho, o dia em que uniremos nossas almas e corpos para sempre, o dia do nosso casamento.";

function OurHistory() {
  return (
    <div className="flex flex-col bg-red-400 justify-center items-center">
      <TitleCommon title="Nossa história" className="pt-[90px]" />
      <SubTitleCommon
        subTitle="COMO É BOM RECORDAR! CONHEÇA OS DETALHES DA NOSSA CAMINHADA ATÉ ESSE GRANDE SONHO DO NOSSO CASAMENTO."
        className="pt-[30px]"
      />
      <Image
        src={folha}
        alt="folha ao centro"
        width={170}
        height={170}
        className="py-[60px]"
      />
      <span className="px-[130px] leading-8 font-semibold text-justify">
        {descriptionText}
      </span>
    </div>
  );
}

export default OurHistory;
