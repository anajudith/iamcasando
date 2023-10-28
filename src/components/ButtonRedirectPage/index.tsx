import React from "react";
import { IProps } from "./ButtonRedirectPage.structure";
import Link from "next/link";

export default function ButtonRedirectPage({ href }: IProps) {
  return (
    <Link href={href}>
      <button
        type="button"
        className="w-[180px] h-[80px] font-semibold bg-rose"
      >
        Envie sua mensagem
      </button>
    </Link>
  );
}
