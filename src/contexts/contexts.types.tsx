import { MappedPodcastEntry } from "../utils/podcastList/api/api.types";

export interface IHeaderLoaderContext {
  showLoader: boolean;
  setShowLoader: (bool: boolean) => void;
}

export interface IFilterContext {
  initialList: MappedPodcastEntry[];
  setInitialList: (podcasts: MappedPodcastEntry[]) => void;
  filter: string;
  setFilter: (string: string) => void;
  filteredList: MappedPodcastEntry[];
  setFilteredList: (podcasts: MappedPodcastEntry[]) => void;
}
