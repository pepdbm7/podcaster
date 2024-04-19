import React, { useContext, useEffect } from "react";
import { Wrapper, HeaderTitle, Loader } from "./Header.styles";
import { ILoaderContext, LoaderContext } from "../../../App";
import { useLocation } from "react-router-dom";

export const Header = () => {
  //   const { showLoader }: ILoaderContext = useContext(
  //     LoaderContext
  //   ) as ILoaderContext;

  const location = useLocation();

  const showLoader = location.key === "default";

  console.log(location);

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <Wrapper>
      <HeaderTitle to="/">
        <h1>Podcaster</h1>
      </HeaderTitle>
      {showLoader ? <Loader /> : null}
    </Wrapper>
  );
};
