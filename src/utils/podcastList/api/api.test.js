import React from "react";

import * as Storage from "../storage/storage";
import * as Api from "../api/api";
import * as mockData from "../../../test/fixtures/mockedData";
import { PODCASTS_LIST_URL } from "../../../consts/endpoints";

import fetchMock from "jest-fetch-mock";

require("jest-fetch-mock").enableMocks();

console.error = jest.fn();

const spyOnGetLocalStoragePodcasts = jest.spyOn(
  Storage,
  "getLocalStoragePodcasts"
);
const spyOnSavePodcastsListToLS = jest.spyOn(
  Storage,
  "saveLocalStoragePodcasts"
);

const setLoader = jest.fn();

jest.spyOn(global.console, "error");

describe("Podcasts list api:", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    fetchMock.resetMocks();
    console.error.mockClear();
  });

  it("getPodcastsList: should fetch podcast list if they are not in local storage", async () => {
    spyOnGetLocalStoragePodcasts.mockImplementationOnce(
      () => mockData.localStoragePodcasts
    );

    fetchMock.mockResponses(
      JSON.stringify({
        contents: JSON.stringify({
          feed: {
            entry: mockData.rawPodcasts,
          },
        }),
        status: { http_code: 200 },
      })
    );

    const podcasts = await Api.getPodcastsList(setLoader);

    expect(fetchMock).toBeCalledWith(PODCASTS_LIST_URL);

    const mappedPodcasts = Api.getMappedPodcastsList(mockData.rawPodcasts);

    expect(spyOnSavePodcastsListToLS).toBeCalledWith(mappedPodcasts);

    expect(podcasts).toStrictEqual(mappedPodcasts);

    expect(setLoader).toBeCalledTimes(2);
  });

  it("getPodcastsList: should throw error on failed fetch", async () => {
    spyOnGetLocalStoragePodcasts.mockImplementationOnce(() => {});

    fetchMock.mockResponse(JSON.stringify({ status: { http_code: 400 } }));

    await Api.getPodcastsList(setLoader);

    expect(console.error).toHaveBeenCalledWith("Endpoint failed");
  });

  it("getPodcastsList: should throw error on wrong format data received", async () => {
    spyOnGetLocalStoragePodcasts.mockImplementationOnce(
      () => mockData.localStoragePodcasts
    );

    fetchMock.mockResponses(
      JSON.stringify({
        contents: JSON.stringify({}),
        status: { http_code: 200 },
      })
    );

    await Api.getPodcastsList(setLoader);

    expect(console.error).toHaveBeenCalledWith("Data received in wrong format");
  });
});
