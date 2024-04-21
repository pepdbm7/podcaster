import React, { lazy, useContext } from "react";
import useListData from "./useListData";

import Card from "../card/Card";
import { ListWrapper } from "./List.styles";
import ListSkeleton from "../listSkeleton/ListSkeleton";
import { ILoaderContext, LoaderContext } from "../../../App";

const List = () => {
  const { showLoader }: ILoaderContext = useContext(
    LoaderContext
  ) as ILoaderContext;

  const { podcastsList } = useListData();

  if (showLoader) return <ListSkeleton />;

  return (
    <ListWrapper>
      {podcastsList?.map((podcast, i) => (
        <Card data={podcast} key={i} />
      ))}
    </ListWrapper>
  );
};

export default List;
