import React from "react";
import { MappedEpisode, MappedPodcastDetails } from "../../../utils/api.types";
import EpisodesListSkeleton from "./EpisodesListSkeleton";

const EpisodesList = (props: {
  data: MappedPodcastDetails | null;
  showLoader: boolean;
}) => {
  if (props.showLoader) return <EpisodesListSkeleton />;

  return (
    <div>{props?.data?.episodes?.map((ep: MappedEpisode) => ep.title)}</div>
  );
};

export default EpisodesList;
