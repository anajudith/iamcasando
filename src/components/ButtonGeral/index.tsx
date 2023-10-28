import React from "react";
import { IProps } from "./ButtonGeral.structure";
import Link from "next/link";

export default function ButtonGeral({ type, title }: IProps) {
  return (
    <button type={type} className="w-[180px] h-[80px] font-semibold bg-rose">
      {title}
    </button>
  );
}
