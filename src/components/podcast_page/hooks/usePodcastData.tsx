import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MappedPodcastDetails } from "../../../utils/podcastList/api/api.types";
import { getPodcastDetails } from "../../../utils/podcastDetails/api/api";
import { IHeaderLoaderContext } from "../../../contexts/contexts.types";
import { HeaderLoaderContext } from "../../../contexts/contexts";

const usePodcastData = () => {
  const { podcastId } = useParams();

  const { showLoader, setShowLoader }: IHeaderLoaderContext = useContext(
    HeaderLoaderContext
  ) as IHeaderLoaderContext;

  const [data, setData] = useState<MappedPodcastDetails | null>(null);

  useEffect(() => {
    const storedPodcastDetails = async () => {
      const res = await getPodcastDetails(podcastId, setShowLoader);

      setData(res);
    };
    storedPodcastDetails();
  }, []);

  return { showLoader, data, podcastId };
};

export default usePodcastData;
