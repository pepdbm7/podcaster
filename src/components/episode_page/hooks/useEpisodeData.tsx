import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  MappedEpisode,
  MappedPodcastBoxDetails,
} from "../../../utils/podcastList/api/api.types";
import { getPodcastDetails } from "../../../utils/podcastDetails/api/api";

const useEpisodeData = () => {
  const { podcastId, episodeId } = useParams();

  const [showLoader, setShowLoader] = useState(false);
  const [podcastDetails, setPodcastDetails] = useState<
    MappedPodcastBoxDetails | undefined
  >();
  const [episode, setEpisode] = useState<MappedEpisode | undefined>();

  useEffect(() => {
    const storedPodcastDetails = async () => {
      const res = await getPodcastDetails(podcastId, setShowLoader);

      setPodcastDetails(res?.details);

      const _episode = res?.episodes?.find((ep) => `${ep.id}` === episodeId);

      setEpisode(_episode);
    };
    storedPodcastDetails();
  }, []);

  return { showLoader, podcastDetails, episode };
};

export default useEpisodeData;
