import React from "react";
import { NavBarHeader } from "@/components";

const titles = ["Páginas", "Presentes", "Confirmar Presença", "language"];

export default function Header() {
  return (
    // Se adicionar o z-50, o formulario para de ficar sobreposto ao cabeçalho e aos submenus.
    <div className="flex w-full fixed h-[100px] bg-slate-100 justify-center gap-96 text-center items-center">
      <NavBarHeader />
    </div>
  );
}
