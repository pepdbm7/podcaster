import React, { lazy, useContext } from "react";
import useListData from "./useListData";

import Card from "../card/Card";
import { Wrapper } from "./List.styles";
import ListSkeleton from "../listSkeleton/ListSkeleton";
import { ILoaderContext, LoaderContext } from "../../../App";

const List = () => {
  const { showLoader }: ILoaderContext = useContext(
    LoaderContext
  ) as ILoaderContext;

  const { podcastsList } = useListData();

  if (showLoader) return <ListSkeleton />;

  return (
    <Wrapper>
      {podcastsList?.map((podcast, i) => (
        <Card data={podcast} key={i} />
      ))}
    </Wrapper>
  );
};

export default List;
