import { MappedPodcastEntry } from "../api/api.types";

export interface LocalStoragePodcasts {
  timestamp: number;
  podcasts: MappedPodcastEntry[];
}
