import { PODCASTS_DETAILS } from "../../../consts/storage";
import { MappedPodcastDetails } from "../api/api.types";
import {
  LocalStoragePodcastDetail,
  LocalStoragePodcastDetailValue,
} from "./storage.types";

const getLocalStoragePodcastsDetails = () => {
  const localPodcasts = localStorage.getItem(PODCASTS_DETAILS);
  if (!localPodcasts) return {};
  const localPodcastsDetails: LocalStoragePodcastDetail =
    JSON.parse(localPodcasts);
  return localPodcastsDetails;
};

export const saveLocalStoragePodcastDetails = (
  podcastId: string,
  podcastDetails: MappedPodcastDetails
) => {
  const newLocalStoragePodcastDetails = {
    ...getLocalStoragePodcastsDetails(),
    [podcastId]: { timestamp: Date.now(), podcastDetails },
  };
  localStorage.setItem(
    PODCASTS_DETAILS,
    JSON.stringify(newLocalStoragePodcastDetails)
  );
};

export const getLocalStoragePodcastDetails = (
  podcastId: string
): LocalStoragePodcastDetailValue => {
  const localPodcastsDetails = getLocalStoragePodcastsDetails();
  return localPodcastsDetails[podcastId];
};
