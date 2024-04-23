import React from "react";

import useSummarySideBox from "./hooks/useSummarySideBox";

import SideBoxSkeleton from "./skeletons/SideBoxSkeleton";
import SummarySkeleton from "./skeletons/SummarySkeleton";

import { MappedPodcastBoxDetails } from "../../../utils/podcastList/api/api.types";

import {
  PodcastArtist,
  PocastImageWrapper,
  PodcastImage,
  PodcastSummary,
  PodcastSummaryTitle,
  PodcastSummaryWrapper,
  PodcastTitle,
  Wrapper,
} from "./SideBox.styles";
import { Link } from "react-router-dom";

const SideBox = ({
  details,
  showLoader,
}: {
  details?: MappedPodcastBoxDetails;
  showLoader: boolean;
}) => {
  const { showSummaryLoader, podcastSummary, link } = useSummarySideBox();

  if (showLoader) return <SideBoxSkeleton />;

  return (
    <Wrapper>
      <PocastImageWrapper to={link}>
        <PodcastImage src={details?.imageUrl} alt={details?.title} />
      </PocastImageWrapper>
      <hr />
      <PodcastTitle>
        <Link to={link}>{details?.title}</Link>
      </PodcastTitle>
      <PodcastArtist>
        by <Link to={link}>{details?.artist}</Link>
      </PodcastArtist>
      <hr />
      {showSummaryLoader ? (
        <SummarySkeleton />
      ) : (
        <PodcastSummaryWrapper>
          <PodcastSummaryTitle>Description: </PodcastSummaryTitle>
          <PodcastSummary>
            <>{podcastSummary}</>
          </PodcastSummary>
        </PodcastSummaryWrapper>
      )}
    </Wrapper>
  );
};

export default SideBox;
