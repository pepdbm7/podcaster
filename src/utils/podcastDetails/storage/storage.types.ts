import { MappedPodcastDetails } from "../api/api.types";

export interface LocalStoragePodcastDetailValue {
  timestamp: number;
  podcastDetails: MappedPodcastDetails;
}

export interface LocalStoragePodcastDetail {
  [key: string]: LocalStoragePodcastDetailValue;
}
