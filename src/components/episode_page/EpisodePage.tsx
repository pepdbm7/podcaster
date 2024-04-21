import React from "react";
import Layout from "../common/layout/Layout";
import { Wrapper } from "./EpisodePage.styles";
import SideBox from "../common/sideBox/SideBox";
import EpisodeDetails from "./episodeDetails/EpisodeDetails";
import useEpisodeData from "./hooks/useEpisodeData";

const Episode = () => {
  const { podcastDetails, episode, showLoader } = useEpisodeData();

  return (
    <Layout>
      <Wrapper>
        <SideBox details={podcastDetails} showLoader={showLoader} />
        <EpisodeDetails episode={episode} showLoader={showLoader} />
      </Wrapper>
    </Layout>
  );
};

export default Episode;
