import { useContext, useEffect, useState } from "react";
import { ILoaderContext, LoaderContext } from "../App";
import { PODCASTS_LIST_URL, PODCAST_DETAILS_URL } from "../consts/endpoints";
import {
  UseApi,
  Podcast,
  PodcastEntry,
  PodcastsListRaw,
  MappedPodcastEntry,
} from "./api.types";
import {
  getLocalStoragePodcasts,
  isTimestampExpired,
  saveLocalStoragePodcasts,
} from "./storage";

const getMappedPodcastsList = (
  podcastsList: PodcastEntry[]
): MappedPodcastEntry[] =>
  podcastsList.map((item) => ({
    id: item.id.attributes["im:id"],
    title: item["im:name"].label,
    author: item["im:artist"].label,
    imageUrl: item["im:image"][1].label,
  }));

const getFetchedPodcastsList = async () => {
  const res = await fetch(PODCASTS_LIST_URL);
  const data = await res?.json();

  if (!data?.contents) throw new Error("Endpoint failed");

  const parsedData = JSON.parse(data.contents)?.feed?.entry;

  if (!parsedData) throw new Error("Data received in wrong format");

  return parsedData;
};

export const getPodcastsList = async (setLoader: (bool: boolean) => void) => {
  const { timestamp, podcasts } = getLocalStoragePodcasts();

  if (!isTimestampExpired(timestamp) && podcasts.length) {
    return podcasts;
  }

  try {
    setLoader(true);
    const fetchedPodcastsList = await getFetchedPodcastsList();
    const mappedPodcastsList = getMappedPodcastsList(fetchedPodcastsList);
    saveLocalStoragePodcasts(mappedPodcastsList);
    setLoader(false);
    return mappedPodcastsList;
  } catch (err) {
    console.log(err);
    setLoader(false);
    return [];
  }
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
