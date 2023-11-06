"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";

interface IProps {
  children: React.ReactNode;
}

const Providers = (props: IProps) => {
  return <SessionProvider>{props.children}</SessionProvider>;
};
export default Providers;
