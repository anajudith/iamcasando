import React from "react";
import { NavBarHeader } from "@/components";

const titles = ["Páginas", "Presentes", "Confirmar Presença"];

export default function Header() {
  return (
    <div className="flex z-50 w-full fixed h-[100px] bg-slate-100 justify-center gap-96 text-center items-center">
      <NavBarHeader />
    </div>
  );
}
