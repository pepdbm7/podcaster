import React from "react";

import Layout from "../common/layout/Layout";
import EpisodesList from "./episodesList/EpisodesList";
import usePodcastData from "./hooks/usePodcastData";
import { Wrapper } from "./PodcastPage.styles";

import SideBox from "../common/sideBox/SideBox";

const PodcastPage = () => {
  const { data, showLoader, podcastId } = usePodcastData();

  return (
    <Layout>
      <Wrapper>
        <SideBox details={data?.details} showLoader={showLoader} />
        <EpisodesList
          data={data}
          showLoader={showLoader}
          podcastId={podcastId}
        />
      </Wrapper>
    </Layout>
  );
};

export default PodcastPage;
