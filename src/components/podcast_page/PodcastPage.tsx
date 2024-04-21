import React, { Suspense, lazy, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getPodcastDetails } from "../../utils/api";
import Layout from "../common/layout/Layout";
import EpisodesList from "./episodesList/EpisodesList";
import { MappedPodcastDetails } from "../../utils/api.types";

const LazyLoadedSideBox = lazy(() => import("../common/sideBox/SideBox"));

const PodcastPage = () => {
  const { podcastId } = useParams();
  const [showLoader, setShowLoader] = useState(false);
  const [data, setData] = useState<MappedPodcastDetails | null>(null);

  const storedPodcastDetails = async () => {
    const res = await getPodcastDetails(podcastId, setShowLoader);
    setData(res);
  };
  useEffect(() => {
    storedPodcastDetails();
  }, []);

  return (
    <Layout>
      <Suspense fallback={<>loading...</>}>
        <LazyLoadedSideBox data={data} showLoader={showLoader} />
        <EpisodesList data={data} showLoader={showLoader} />
      </Suspense>
    </Layout>
  );
};

export default PodcastPage;
