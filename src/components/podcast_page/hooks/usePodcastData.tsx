import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MappedPodcastDetails } from "../../../utils/podcastList/api/api.types";
import { getPodcastDetails } from "../../../utils/podcastDetails/api/api";

const usePodcastData = () => {
  const params = useParams();
  console.log({ params });
  const { podcastId } = useParams();

  const [showLoader, setShowLoader] = useState(false);
  const [data, setData] = useState<MappedPodcastDetails | null>(null);

  useEffect(() => {
    const storedPodcastDetails = async () => {
      const res = await getPodcastDetails(podcastId, setShowLoader);
      console.log({ res });
      setData(res);
    };
    storedPodcastDetails();
  }, []);

  return { showLoader, data, podcastId };
};

export default usePodcastData;
