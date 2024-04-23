import { PODCASTS_LIST_URL } from "../../../consts/endpoints";
import { PodcastEntry, MappedPodcastEntry } from "./api.types";
import { isTimestampExpired } from "../../dateFormatters";
import {
  getLocalStoragePodcasts,
  saveLocalStoragePodcasts,
} from "../storage/storage";

export const getMappedPodcastsList = (
  podcastsList: PodcastEntry[]
): MappedPodcastEntry[] =>
  podcastsList.map((podcast) => ({
    id: podcast.id.attributes["im:id"],
    title: podcast["im:name"].label,
    artist: podcast["im:artist"].label,
    imageUrl: podcast["im:image"][1].label,
    summary: podcast.summary.label,
  }));

export const getFetchedPodcastsList = async () => {
  const res = await fetch(PODCASTS_LIST_URL);
  const data = await res?.json();

  if (data?.status?.http_code !== 200) throw "Endpoint failed";

  const parsedData = JSON.parse(data.contents)?.feed?.entry;

  if (!parsedData) throw "Data received in wrong format";

  return parsedData;
};

export const getPodcastsList = async (setLoader?: (bool: boolean) => void) => {
  const localStoragePodcastList = getLocalStoragePodcasts();

  if (
    localStoragePodcastList?.timestamp &&
    !isTimestampExpired(localStoragePodcastList.timestamp) &&
    localStoragePodcastList?.podcasts.length
  ) {
    return localStoragePodcastList.podcasts;
  }

  try {
    setLoader?.(true);
    const fetchedPodcastsList = await getFetchedPodcastsList();

    const mappedPodcastsList = getMappedPodcastsList(fetchedPodcastsList);
    saveLocalStoragePodcasts(mappedPodcastsList);
    setLoader?.(false);

    return mappedPodcastsList;
  } catch (err) {
    console.error(err);
    setLoader?.(false);
    return [];
  }
};
