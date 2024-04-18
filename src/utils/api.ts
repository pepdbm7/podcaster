import { useContext, useEffect, useState } from "react";
import { ILoaderContext, LoaderContext } from "../App";
import { PODCASTS_LIST_URL, PODCAST_DETAILS_URL } from "../consts/endpoints";
import { UseApi, Podcast, PodcastEntry, PodcastsListRaw } from "./api.types";

export const useApi = ({ url, podcastId, enabled }: UseApi) => {
  const { isLoading, setIsLoading }: ILoaderContext = useContext(
    LoaderContext
  ) as ILoaderContext;
  const [results, setResults] = useState<PodcastEntry[] | Podcast | undefined>(
    []
  );

  useEffect(() => {
    const getContent = async () => {
      if (url === PODCAST_DETAILS_URL && !podcastId) {
        console.error("Podcast Id is missing");
        return;
      }

      setIsLoading(true);

      if (url === PODCASTS_LIST_URL) {
        const res = await fetch(url);
        const data: PodcastsListRaw = await res?.json();
        setResults(data?.feed?.entry);
      } else if (url === PODCAST_DETAILS_URL) {
        const urlWithPodcastId = url.replace(":podcastId", `${podcastId}`);
        const res = await fetch(urlWithPodcastId);
        const data: Podcast = await res?.json();
        setResults(data);
      }

      setIsLoading(false);
    };

    if (enabled) getContent();
  }, []);

  return { isLoading, results };
};
