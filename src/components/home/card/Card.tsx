import React from "react";
import { MappedPodcastEntry } from "../../../utils/api.types";
import { Wrapper, Image, Title, Author } from "./Card.styles";
import { PODCAST_PATH } from "../../../consts/routes";

const Card = ({ data }: { data: MappedPodcastEntry }) => {
  const { id, imageUrl, title, author } = data;
  return (
    <Wrapper to={PODCAST_PATH.replace(":podcastId", id)}>
      <Image src={imageUrl} alt="podcast" />
      <Title>{title}</Title>
      <Author>Author: {author}</Author>
    </Wrapper>
  );
};

export default Card;
