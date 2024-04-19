import React from "react";
import { PodcastEntry } from "../../../utils/api.types";
import { Wrapper } from "./Card.styles";
import { PODCAST_PATH } from "../../../consts/routes";

const Card = ({ data }: { data: PodcastEntry }) => {
  return (
    <Wrapper
      to={PODCAST_PATH.replace(":podcastId", data?.id?.attributes?.["im:id"])}
    >
      {data?.["im:name"].label}
    </Wrapper>
  );
};

export default Card;
