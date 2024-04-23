import React, { useContext } from "react";

import { Wrapper, HeaderTitle, Loader } from "./Header.styles";
import { IHeaderLoaderContext } from "../../../contexts/contexts.types";
import { HeaderLoaderContext } from "../../../contexts/contexts";

export const Header = () => {
  const { showLoader }: IHeaderLoaderContext = useContext(
    HeaderLoaderContext
  ) as IHeaderLoaderContext;

  return (
    <Wrapper>
      <HeaderTitle to="/">
        <h1>Podcaster</h1>
      </HeaderTitle>
      {showLoader ? <Loader /> : null}
    </Wrapper>
  );
};
