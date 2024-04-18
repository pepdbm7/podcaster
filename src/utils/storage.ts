import { PODCASTS_DETAILS, PODCASTS_LIST } from "../consts/storage";
import { Podcast, PodcastEntry } from "./api.types";
import {
  LocalStoragePodcastDetails,
  LocalStoragePodcasts,
} from "./storage.types";

// PODCAST LIST:

export const getLocalStoragePodcasts = () => {
  const savedPodcasts = localStorage.getItem(PODCASTS_LIST);
  if (!savedPodcasts) return null;
  const { timestamp, podcasts }: LocalStoragePodcasts =
    JSON.parse(savedPodcasts);
  return { podcasts };
};

export const saveLocalStoragePodcasts = (podcasts: PodcastEntry[]) => {
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
  const localPodcastsDetails: LocalStoragePodcastDetails =
    JSON.parse(localPodcasts);
  return localPodcastsDetails;
};

export const saveLocalStoragePodcastDetails = (
  podcastId: string,
  podcastDetails: Podcast
) => {
  const newLocalStoragePodcastDetails = {
    ...getLocalStoragePodcastsDetails(),
    [podcastId]: { timestamp: Date.now(), podcastDetails: podcastDetails },
  };
  localStorage.setItem(
    PODCASTS_DETAILS,
    JSON.stringify(newLocalStoragePodcastDetails)
  );
};

export const getPodcastDetails = async (podcastId: string | undefined) => {
  if (!podcastId) return {};
  const localPodcastsDetails = getLocalStoragePodcastsDetails();
  return localPodcastsDetails[podcastId];
};
