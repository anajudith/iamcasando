import React from "react";
import { NavBarHeader } from "@/components";

const titles = ["Páginas", "Presentes", "Confirmar Presença", "language"];

export default function Header() {
  return (
    <div className="w-full h-[100px]  bg-slate-100 flex justify-center gap-96 text-center items-center">
      <NavBarHeader />
    </div>
  );
}
