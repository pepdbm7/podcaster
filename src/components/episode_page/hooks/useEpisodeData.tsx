import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  MappedEpisode,
  MappedPodcastBoxDetails,
} from "../../../utils/podcastList/api/api.types";
import { getPodcastDetails } from "../../../utils/podcastDetails/api/api";
import { IHeaderLoaderContext } from "../../../contexts/contexts.types";
import { HeaderLoaderContext } from "../../../contexts/contexts";

const useEpisodeData = () => {
  const { podcastId, episodeId } = useParams();

  const { showLoader, setShowLoader }: IHeaderLoaderContext = useContext(
    HeaderLoaderContext
  ) as IHeaderLoaderContext;

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
