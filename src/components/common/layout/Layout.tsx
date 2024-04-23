import React from "react";

import { Main } from "./Layout.styles";
import { Header } from "../header/Header";

const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <Main>
      <Header />
      {children}
    </Main>
  );
};

export default Layout;
