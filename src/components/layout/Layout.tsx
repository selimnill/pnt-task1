"use client";
import { store } from "@/app/redux/store";
import { SessionProvider, useSession } from "next-auth/react";
import React from "react";
import { Provider } from "react-redux";

const Layout = ({ children }: { children: React.ReactNode }) => {


  return (
    <SessionProvider>
      <Provider store={store}>{children}</Provider>
    </SessionProvider>
  );
};

export default Layout;
