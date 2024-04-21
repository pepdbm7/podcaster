import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MappedPodcastDetails } from "../../../utils/api.types";
import { getPodcastDetails } from "../../../utils/api";

const usePodcastData = () => {
  const { podcastId } = useParams();

  const [showLoader, setShowLoader] = useState(false);
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
