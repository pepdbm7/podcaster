import { PODCAST_DETAILS_URL } from "../../../consts/endpoints";
import { Podcast, MappedPodcastDetails } from "../../podcastList/api/api.types";
import {
  getFormattedDate,
  getFormattedMinutes,
  isTimestampExpired,
} from "../../dateFormatters";
import {
  getLocalStoragePodcastDetails,
  saveLocalStoragePodcastDetails,
} from "../storage/storage";
import { getPodcastsList } from "../../podcastList/api/api";

export const getPodcastSummary = async (
  podcastId: string | undefined,
  setLoader?: (bool: boolean) => void
) => {
  if (!podcastId) console.error("No podcast id to find its summary");

  const podcastsList = await getPodcastsList(setLoader);

  const podcast = podcastsList?.find((podcast) => podcast.id === podcastId);

  return podcast?.summary;
};

export const getMappedPodcastDetails = (
  podcastDetails: Podcast
): MappedPodcastDetails => ({
  details: {
    title: podcastDetails.results?.[0]?.trackName,
    artist: podcastDetails.results?.[0]?.artistName,
    imageUrl: podcastDetails.results?.[0]?.artworkUrl100,
  },
  episodesCount: podcastDetails.resultCount,
  episodes: podcastDetails.results.map((episode) => ({
    id: episode.trackId,
    title: episode.trackName,
    date: getFormattedDate(episode.releaseDate),
    duration: getFormattedMinutes(episode.trackTimeMillis),
    description: episode.description || episode.shortDescription,
    previewSrc: episode.previewUrl,
  })),
});

export const getFetchedPodcastDetails = async (podcastId: string) => {
  const urlWithId = PODCAST_DETAILS_URL.replace(":podcastId", podcastId);
  const res = await fetch(urlWithId);
  const data = await res?.json();
  if (data?.status.http_code !== 200) throw "Endpoint failed";

  const parsedData = JSON.parse(data.contents);

  if (!parsedData?.results && !parsedData?.resultCount)
    throw "Podcast details received in wrong format";

  return parsedData;
};

export const getPodcastDetails = async (
  podcastId?: string,
  setLoader?: (bool: boolean) => void
): Promise<MappedPodcastDetails | null> => {
  try {
    if (!podcastId) throw "No podcast id found to get podcast details";

    const localStoragPodcastDetails = getLocalStoragePodcastDetails(podcastId);

    if (
      localStoragPodcastDetails?.timestamp &&
      !isTimestampExpired(localStoragPodcastDetails?.timestamp)
    ) {
      return localStoragPodcastDetails?.podcastDetails;
    }

    setLoader?.(true);

    const fetchedPodcastDetails = await getFetchedPodcastDetails(podcastId);

    const mappedPodcastDetails = getMappedPodcastDetails(fetchedPodcastDetails);
    saveLocalStoragePodcastDetails(podcastId, mappedPodcastDetails);
    setLoader?.(false);

    return mappedPodcastDetails;
  } catch (err) {
    console.error(err);
    setLoader?.(false);
    return null;
  }
};
