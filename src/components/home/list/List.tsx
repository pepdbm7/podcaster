import React from "react";
import useListData from "./useListData";

import Card from "../card/Card";
import { Wrapper } from "./List.styles";

const List = () => {
  const { podcastsList } = useListData();

  return (
    <Wrapper>
      {podcastsList?.map((podcast, i) => (
        <Card data={podcast} key={i} />
      ))}
    </Wrapper>
  );
};

export default List;
