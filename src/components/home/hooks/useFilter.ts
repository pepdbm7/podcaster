import { useEffect, useState } from "react";

import { PODCASTS_LIST_URL } from "../../../consts/endpoints";

import { PodcastEntry } from "../../../utils/api.types";
import { useApi } from "../../../utils/api";
import { getLocalStoragePodcasts } from "../../../utils/storage";

export const useFilter = () => {
  const storedPodcastList = getLocalStoragePodcasts();
  const { results } = useApi({
    url: PODCASTS_LIST_URL,
    enabled: !storedPodcastList?.podcasts,
  }) as { results: PodcastEntry[] };

  const podcasts = storedPodcastList?.podcasts || results;
  console.log({ storedPodcastList, results });

  const [filter, setFilter] = useState("");
  const [filteredList, setFilteredList] = useState<PodcastEntry[]>([]);

  const getCaseInsensitiveCoincidences = (a: string, b: string) =>
    a.toLowerCase().includes(b.toLowerCase());

  const filterPodcasts = (filter: string) => {
    const newPodcasts = results?.filter(
      (podcast: PodcastEntry) =>
        getCaseInsensitiveCoincidences(podcast.title.label, filter) ||
        getCaseInsensitiveCoincidences(podcast["im:artist"].label, filter)
    );
    setFilteredList(newPodcasts);
  };

  useEffect(() => {
    setFilteredList(podcasts);
  }, [podcasts]);

  useEffect(() => {
    filterPodcasts(filter);
  }, [filter]);

  return { filteredList, filter, setFilter };
};
