import { Podcast, PodcastEntry } from "./api.types";

export interface LocalStoragePodcasts {
  timestamp: number;
  podcasts: PodcastEntry[];
}

export interface StoragePodcastDetails {
  timestamp: number;
  podcastDetails: Podcast;
}

export interface LocalStoragePodcastDetails {
  [key: string]: StoragePodcastDetails;
}
