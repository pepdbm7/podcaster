import { PODCASTS_LIST } from "../../../consts/storage";
import { MappedPodcastEntry } from "../api/api.types";
import { LocalStoragePodcasts } from "./storage.types";

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
