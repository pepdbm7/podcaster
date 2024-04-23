import React from "react";
import { MappedEpisode } from "../../../utils/podcastList/api/api.types";
import { Wrapper, Title, Description } from "./EpisodeDetails.styles";
import EpisodeDetailsSkeleton from "../skeletons/EpisodeDetailsSkeleton";

const EpisodeDetails = ({
  episode,
  showLoader,
}: {
  episode?: MappedEpisode;
  showLoader: boolean;
}) => {
  if (showLoader) return <EpisodeDetailsSkeleton />;

  return (
    <Wrapper>
      <Title>{episode?.title}</Title>
      <Description>{episode?.description}</Description>
      <audio data-testid="track_player" controls>
        <source src={episode?.previewSrc} type="audio/ogg" />
        <source src={episode?.previewSrc} type="audio/mpeg" />
      </audio>
    </Wrapper>
  );
};

export default EpisodeDetails;
