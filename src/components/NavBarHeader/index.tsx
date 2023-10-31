"use client";
import { headerMenus } from "@/utils/list";
import React from "react";
import { ButtonRedirectPage, SidemenuButton } from "@/components";
import { IProps } from "./NavBarHeader.structure";
import { useRouter } from "next/navigation";

export default function NavBarHeader({ currentPage }: IProps) {
  const router = useRouter();

  return (
    <div className="w-full mx-[100px] flex justify-evenly">
      <a href="/" className="flex text-5xl">
        A<p>&</p>E
      </a>
      <div className="gap-10 ml-[400px] border-gray-20 flex items-center">
        {headerMenus.map((menu, index) => {
          const isActive = menu.redirectTo === currentPage;
          return (
            <SidemenuButton
              label={menu.label}
              subMenus={menu.subItems}
              key={index}
              // redirectTo={menu.redirectTo}
              isActive={isActive}
              handleNavigation={(route) => router.push(route)}
            />
          );
        })}
        <ButtonRedirectPage
          className="bg-red-900 w-[180px]"
          href=""
          title="Fazer login"
        />
      </div>
    </div>
  );
}
