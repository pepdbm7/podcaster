import React from "react";
import { MappedPodcastEntry } from "../../../utils/api.types";
import { Wrapper } from "./Card.styles";
import { PODCAST_PATH } from "../../../consts/routes";

const Card = ({ data }: { data: MappedPodcastEntry }) => {
  return (
    <Wrapper to={PODCAST_PATH.replace(":podcastId", data?.id)}>
      {data?.title}
    </Wrapper>
  );
};

export default Card;
