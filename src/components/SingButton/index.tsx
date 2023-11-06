"use client";
import React from "react";
import { useSession, signOut, signIn } from "next-auth/react";
import Image from "next/image";

export default function SingIn() {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div className="flex w-full gap-2">
        <Image
          rel="preload"
          className="rounded-full"
          src={session?.user?.image!}
          width={50}
          height={50}
          alt="Nome do usuario"
        />
        <button onClick={() => signOut()} className="text-slate-900">
          Sign out
        </button>
      </div>
    );
  }

  return (
    <button onClick={() => signIn()} className="text-slate-900">
      Sign In
    </button>
  );
}
