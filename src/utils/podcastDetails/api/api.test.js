import React from "react";

import * as Storage from "../storage/storage";
import * as ListStorage from "../../podcastList/storage/storage";
import * as TimeFormatters from "../../dateFormatters";
import * as Api from "../api/api";
import * as mockData from "../../../test/fixtures/mockedData";
import { PODCAST_DETAILS_URL } from "../../../consts/endpoints";

import fetchMock from "jest-fetch-mock";

require("jest-fetch-mock").enableMocks();

console.error = jest.fn();
const spyOnIsTimestampExpired = jest.spyOn(
  TimeFormatters,
  "isTimestampExpired"
);

const spyOnGetLocalStoragePodcastDetails = jest.spyOn(
  Storage,
  "getLocalStoragePodcastDetails"
);
const spyOnSavePodcastDetailsToLS = jest.spyOn(
  Storage,
  "saveLocalStoragePodcastDetails"
);

const spyOnGetLocalStoragePodcasts = jest.spyOn(
  ListStorage,
  "getLocalStoragePodcasts"
);

const setLoader = jest.fn();
const podcastId = 1535809341;

jest.spyOn(global.console, "error");

describe("Podcast details api:", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    fetchMock.resetMocks();
    console.error.mockClear();
  });

  it("getPodcastDetails: should fetch podcast details if they are not in local storage", async () => {
    spyOnGetLocalStoragePodcastDetails.mockImplementationOnce(
      () => mockData.localStoragePodcastDetails[podcastId]
    );
    spyOnIsTimestampExpired.mockImplementationOnce(() => true);

    fetchMock.mockResponses(
      JSON.stringify({
        contents: JSON.stringify(mockData.rawPodcastDetails),
        status: { http_code: 200 },
      })
    );

    const podcasts = await Api.getPodcastDetails(podcastId, setLoader);

    expect(spyOnIsTimestampExpired).toBeCalledWith(
      mockData.localStoragePodcastDetails[podcastId].timestamp
    );
    expect(spyOnIsTimestampExpired).toReturnWith(true);

    const urlWithId = PODCAST_DETAILS_URL.replace(":podcastId", podcastId);

    expect(fetchMock).toBeCalledWith(urlWithId);

    const mappedPodcasts = Api.getMappedPodcastDetails(
      mockData.rawPodcastDetails
    );

    expect(spyOnSavePodcastDetailsToLS).toBeCalledWith(
      podcastId,
      mappedPodcasts
    );

    expect(podcasts).toStrictEqual(mappedPodcasts);

    expect(setLoader).toBeCalledTimes(2);
  });

  it("getPodcastDetails: should not fetch podcast details if they are already in local storage", async () => {
    spyOnGetLocalStoragePodcastDetails.mockImplementationOnce(
      () => mockData.localStoragePodcastDetails[podcastId]
    );
    spyOnIsTimestampExpired.mockImplementationOnce(() => false);

    await Api.getPodcastDetails(podcastId, setLoader);

    expect(spyOnIsTimestampExpired).toBeCalledWith(
      mockData.localStoragePodcastDetails[podcastId].timestamp
    );
    expect(spyOnIsTimestampExpired).toReturnWith(false);

    expect(setLoader).not.toBeCalled();
  });

  it("getPodcastDetails: should throw error on failed fetch", async () => {
    spyOnGetLocalStoragePodcastDetails.mockImplementationOnce(() => {});

    fetchMock.mockResponse(JSON.stringify({ status: { http_code: 400 } }));

    await Api.getPodcastDetails(podcastId, setLoader);

    expect(console.error).toBeCalledWith("Endpoint failed");

    expect(setLoader).toBeCalledTimes(2);
  });

  it("getPodcastDetails: should throw error on wrong format data received", async () => {
    fetchMock.mockResponses(
      JSON.stringify({
        contents: JSON.stringify({ resultCount: 0, results: null }),
        status: { http_code: 200 },
      })
    );

    await Api.getPodcastDetails(podcastId, setLoader);

    expect(console.error).toHaveBeenCalledWith(
      "Podcast details received in wrong format"
    );
  });

  it("getPodcastSummary: should get summary of podcast list", async () => {
    spyOnGetLocalStoragePodcasts.mockImplementationOnce(
      () => mockData.localStoragePodcasts
    );

    const summary = await Api.getPodcastSummary(`${podcastId}`, setLoader);
    expect(summary).toBe(mockData.localStoragePodcasts.podcasts[0].summary);
  });

  it("getPodcastSummary: should log an error if no podcastId is provided", async () => {
    await Api.getPodcastSummary();

    expect(console.error).toHaveBeenCalledWith(
      "No podcast id to find its summary"
    );
  });
});
