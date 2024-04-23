import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getPodcastSummary } from "../../../../utils/podcastDetails/api/api";
import { IHeaderLoaderContext } from "../../../../contexts/contexts.types";
import { HeaderLoaderContext } from "../../../../contexts/contexts";

const useSummarySideBox = () => {
  const { podcastId } = useParams();

  const { showLoader, setShowLoader }: IHeaderLoaderContext = useContext(
    HeaderLoaderContext
  ) as IHeaderLoaderContext;

  const [podcastSummary, setPodcastSummary] = useState<string | undefined>("");

  useEffect(() => {
    const _getPodcastSummary = async () => {
      const _podcastSummary = await getPodcastSummary(podcastId, setShowLoader);
      setPodcastSummary(_podcastSummary);
    };

    _getPodcastSummary();
  }, []);

  return {
    showSummaryLoader: showLoader,
    podcastSummary,
    link: `/podcast/${podcastId}`,
  };
};

export default useSummarySideBox;
