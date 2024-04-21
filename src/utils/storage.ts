import { PODCASTS_DETAILS, PODCASTS_LIST } from "../consts/storage";
import {
  MappedPodcastEntry,
  MappedPodcastDetails,
  LocalStoragePodcastDetail,
  LocalStoragePodcastDetailValue,
} from "./api.types";
import { LocalStoragePodcasts } from "./storage.types";

export const isTimestampExpired = (timestamp: number) => {
  if (!timestamp) return false;

  const current = Date.now();
  const diffInMilliseconds = current - timestamp;
  return diffInMilliseconds / (3600 * 1000) > 24;
};

// PODCAST LIST:

export const getLocalStoragePodcasts = () => {
  const savedPodcasts = localStorage.getItem(PODCASTS_LIST);
  if (!savedPodcasts) return { timestamp: 0, podcasts: [] };
  const { timestamp, podcasts }: LocalStoragePodcasts =
    JSON.parse(savedPodcasts);
  return { timestamp, podcasts };
};

export const saveLocalStoragePodcasts = (podcasts: MappedPodcastEntry[]) => {
  localStorage.setItem(
    PODCASTS_LIST,
    JSON.stringify({
      timestamp: Date.now(),
      podcasts,
    })
  );
};

// PODCAST DETAILS:

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
