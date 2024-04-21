import React, { useState } from "react";
import { Main } from "./SideBox.styles";
import SideBoxSkeleton from "./sideboxSkeleton/SideBoxSkeleton";
import { MappedPodcastDetails } from "../../../utils/api.types";
import { useParams } from "react-router-dom";
import { getPodcastSummary } from "../../../utils/api";
import SummarySkeleton from "./summarySkeleton/SummarySkeleton";

const SideBox = ({
  data,
  showLoader,
}: {
  data: MappedPodcastDetails | null;
  showLoader: boolean;
}) => {
  const { podcastId } = useParams();

  const [showSummaryLoader, setShowSummaryLoader] = useState(false);

  const podcastSummary = getPodcastSummary(podcastId, setShowSummaryLoader);

  if (showLoader) return <SideBoxSkeleton />;

  return (
    <Main>
      descritpion here:
      {showSummaryLoader ? <SummarySkeleton /> : <>{podcastSummary}</>}
    </Main>
  );
};

export default SideBox;
