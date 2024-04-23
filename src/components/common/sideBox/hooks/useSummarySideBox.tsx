import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getPodcastSummary } from "../../../../utils/podcastDetails/api/api";

const useSummarySideBox = () => {
  const { podcastId } = useParams();

  const [showSummaryLoader, setShowSummaryLoader] = useState(false);
  const [podcastSummary, setPodcastSummary] = useState<string | undefined>("");

  useEffect(() => {
    const _getPodcastSummary = async () => {
      const _podcastSummary = await getPodcastSummary(
        podcastId,
        setShowSummaryLoader
      );
      console.log({ _podcastSummary });
      setPodcastSummary(_podcastSummary);
    };

    _getPodcastSummary();
  }, []);

  return { showSummaryLoader, podcastSummary, link: `/podcast/${podcastId}` };
};

export default useSummarySideBox;
