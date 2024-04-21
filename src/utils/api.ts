import { useContext, useEffect, useState } from "react";
import { ILoaderContext, LoaderContext } from "../App";
import { PODCASTS_LIST_URL, PODCAST_DETAILS_URL } from "../consts/endpoints";
import {
  UseApi,
  Podcast,
  PodcastEntry,
  PodcastsListRaw,
  MappedPodcastEntry,
  MappedPodcastDetails,
} from "./api.types";
import {
  getLocalStoragePodcastDetails,
  getLocalStoragePodcasts,
  isTimestampExpired,
  saveLocalStoragePodcastDetails,
  saveLocalStoragePodcasts,
} from "./storage";

// PODCASTS LIST:

const getMappedPodcastsList = (
  podcastsList: PodcastEntry[]
): MappedPodcastEntry[] =>
  podcastsList.map((podcast) => ({
    id: podcast.id.attributes["im:id"],
    title: podcast["im:name"].label,
    artist: podcast["im:artist"].label,
    imageUrl: podcast["im:image"][1].label,
    summary: podcast.summary.label,
  }));

const getFetchedPodcastsList = async () => {
  const res = await fetch(PODCASTS_LIST_URL);
  const data = await res?.json();

  if (!data?.contents) throw new Error("Endpoint failed");

  const parsedData = JSON.parse(data.contents)?.feed?.entry;

  if (!parsedData) throw new Error("Data received in wrong format");

  return parsedData;
};

export const getPodcastsList = async (setLoader?: (bool: boolean) => void) => {
  const { timestamp, podcasts } = getLocalStoragePodcasts();

  if (!isTimestampExpired(timestamp) && podcasts.length) {
    return podcasts;
  }

  try {
    setLoader?.(true);
    const fetchedPodcastsList = await getFetchedPodcastsList();
    const mappedPodcastsList = getMappedPodcastsList(fetchedPodcastsList);
    saveLocalStoragePodcasts(mappedPodcastsList);
    setLoader?.(false);
    return mappedPodcastsList;
  } catch (err) {
    console.log(err);
    setLoader?.(false);
    return [];
  }
};

//PODCAST DETAILS:

export const getPodcastSummary = async (
  podcastId: string | undefined,
  setLoader?: (bool: boolean) => void
) => {
  if (podcastId) console.error("No podcast id to find its summary");
  const podcastsList = await getPodcastsList(setLoader);
  const podcast = podcastsList?.find((podcast) => podcast.id === podcastId);
  return podcast?.summary;
};

const getMappedPodcastDetails = (
  podcastDetails: Podcast
): MappedPodcastDetails => ({
  details: {
    title: podcastDetails.results?.[0]?.trackName,
    artist: podcastDetails.results?.[0]?.artistName,
    imageUrl: podcastDetails.results?.[0]?.artworkUrl100,
  },
  episodesCount: podcastDetails.resultCount,
  episodes: podcastDetails.results.map((episode) => ({
    title: episode.trackName,
    date: episode.releaseDate,
    duration: episode.trackTimeMillis,
    description: episode.description || episode.shortDescription,
    previewSrc: episode.previewUrl,
  })),
});

const getFetchedPodcastDetails = async (podcastId: string) => {
  const urlWithId = PODCAST_DETAILS_URL.replace(":podcastId", podcastId);
  const res = await fetch(urlWithId);
  const details = await res?.json();
  return details;
};

const initialPodcastDetails = {
  details: {},
  episodesCount: 0,
  episodes: [],
};

export const getPodcastDetails = async (
  podcastId?: string,
  setLoader?: (bool: boolean) => void
): Promise<MappedPodcastDetails | null> => {
  try {
    if (!podcastId)
      throw new Error("No podcast id found to get podcast details");

    const { timestamp, podcastDetails } =
      getLocalStoragePodcastDetails(podcastId);

    if (timestamp && !isTimestampExpired(timestamp)) {
      return podcastDetails;
    }

    setLoader?.(true);
    const fetchedPodcastDetails = await getFetchedPodcastDetails(podcastId);
    const mappedPodcastDetails = getMappedPodcastDetails(fetchedPodcastDetails);
    saveLocalStoragePodcastDetails(podcastId, mappedPodcastDetails);
    setLoader?.(false);
    return mappedPodcastDetails;
  } catch (err) {
    console.log(err);
    setLoader?.(false);
    return null;
  }
};
