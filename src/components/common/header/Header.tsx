import { useContext, useEffect } from "react";

import { Wrapper, HeaderTitle, Loader } from "./Header.styles";
import { IHeaderLoaderContext } from "../../../contexts/contexts.types";
import { HeaderLoaderContext } from "../../../contexts/contexts";

export const Header = () => {
  const { showLoader, setShowLoader }: IHeaderLoaderContext = useContext(
    HeaderLoaderContext
  ) as IHeaderLoaderContext;

  useEffect(() => {
    return () => {
      setShowLoader(false);
    };
  }, [setShowLoader]);

  return (
    <Wrapper>
      <HeaderTitle to="/" isLoading={showLoader}>
        <h1>Podcaster</h1>
      </HeaderTitle>
      {showLoader ? <Loader /> : null}
    </Wrapper>
  );
};
