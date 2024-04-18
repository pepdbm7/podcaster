import React, { Suspense } from "react";
import { useParams } from "react-router-dom";

import { useApi } from "../../utils/api";
import { PODCAST_DETAILS_URL } from "../../consts/endpoints";
import { getPodcastDetails } from "../../utils/storage";

const Podcast = () => {
  const { podcastId } = useParams();

  const storedPodcastDetails = getPodcastDetails(podcastId);

  const { results } = useApi({
    url: PODCAST_DETAILS_URL,
    podcastId,
    enabled: !storedPodcastDetails,
  });

  return (
    <Suspense fallback={<p>loading...</p>}>
      <div>
        Podcast Details here:
        {/* <img src={results.artworkUrl100} /> */}
      </div>
    </Suspense>
  );
};

export default Podcast;
