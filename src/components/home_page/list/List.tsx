import React from "react";
import useListData from "./useListData";

import Card from "../card/Card";
import { ListWrapper } from "./List.styles";
import ListSkeleton from "../listSkeleton/ListSkeleton";

const List = () => {
  const { podcastsList, showLoader } = useListData();

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
