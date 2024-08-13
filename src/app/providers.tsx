"use client";
import { SessionProvider } from "next-auth/react";

type Properties = {
  children?: React.ReactNode;
};

export const Providers = ({ children }: Properties) => {
  return <SessionProvider>{children}</SessionProvider>;
};
