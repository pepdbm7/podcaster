import React, { useContext, useEffect } from "react";
import { Wrapper, HeaderTitle, Loader } from "./Header.styles";
import { ILoaderContext, LoaderContext } from "../../../App";

export const Header = () => {
  const { showLoader }: ILoaderContext = useContext(
    LoaderContext
  ) as ILoaderContext;

  return (
    <Wrapper>
      <HeaderTitle to="/">
        <h1>Podcaster</h1>
      </HeaderTitle>
      {showLoader ? <Loader /> : null}
    </Wrapper>
  );
};
