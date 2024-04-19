import { Podcast, MappedPodcastEntry } from "./api.types";

export interface LocalStoragePodcasts {
  timestamp: number;
  podcasts: MappedPodcastEntry[];
}

export interface StoragePodcastDetails {
  timestamp: number;
  podcastDetails: Podcast;
}

export interface LocalStoragePodcastDetails {
  [key: string]: StoragePodcastDetails;
}
