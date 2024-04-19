import { useContext, useEffect, useState } from "react";
import { ILoaderContext, LoaderContext } from "../App";
import { PODCASTS_LIST_URL, PODCAST_DETAILS_URL } from "../consts/endpoints";
import { UseApi, Podcast, PodcastEntry, PodcastsListRaw } from "./api.types";
import {
  getLocalStoragePodcasts,
  isTimestampExpired,
  saveLocalStoragePodcasts,
} from "./storage";

const getFetchedPodcastsList = async () => {
  const res = await fetch(PODCASTS_LIST_URL);
  const data = await res?.json();
  return data?.feed?.entry;
};

export const getPodcastsList = async () => {
  const { timestamp, podcasts } = getLocalStoragePodcasts();

  if (!isTimestampExpired(timestamp) && podcasts.length) {
    return podcasts;
  }

  const fetchedPodcastsList = await getFetchedPodcastsList();
  saveLocalStoragePodcasts(fetchedPodcastsList);
  return fetchedPodcastsList;
};

//hook deprecated:
export const useApi = ({ url, podcastId, enabled }: UseApi) => {
  //   const { isLoading, setIsLoading }: ILoaderContext = useContext(
  //     LoaderContext
  //   ) as ILoaderContext;
  const [results, setResults] = useState<PodcastEntry[] | Podcast | undefined>(
    []
  );

  useEffect(() => {
    const getContent = async () => {
      try {
        if (url === PODCAST_DETAILS_URL && !podcastId) {
          console.error("Podcast Id is missing");
          return;
        }

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
      } catch (err) {
        console.error(err);
      }
    };

    if (enabled) getContent();
  }, []);

  return { results };
};
