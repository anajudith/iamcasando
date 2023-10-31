import React from "react";
import { IProps } from "./ButtonRedirectPage.structure";
import Link from "next/link";

export default function ButtonRedirectPage({
  onClick,
  href = "",
  title,
  className,
}: IProps) {
  return (
    <Link href={href}>
      <button
        onClick={onClick}
        type="button"
        className={` w-full h-full font-semibold bg-rose ${className}`}
      >
        {title}
      </button>
    </Link>
  );
}

// Tentar tirar o link e e deixar apenas o onClick e passar o redirecionamento na função de quado chamar o componente.
