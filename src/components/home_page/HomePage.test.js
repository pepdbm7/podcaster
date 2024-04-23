import React from "react";

import { render, userEvent } from "../../test/helpers";
import HomePage from "./HomePage";
import * as ListStorage from "../../utils/podcastList/storage/storage";

import { rawPodcasts } from "../../test/fixtures/mockedData";
import { FilterContext } from "../../contexts/contexts";
import fetchMock from "jest-fetch-mock";
import { getMappedPodcastsList } from "../../utils/podcastList/api/api";
require("jest-fetch-mock").enableMocks();

fetchMock.mockResponses(
  JSON.stringify({
    contents: JSON.stringify({
      feed: {
        entry: rawPodcasts,
      },
    }),
    status: { http_code: 200 },
  })
);

const initialPodcasts = getMappedPodcastsList(rawPodcasts);

const filterContextValues = {
  initialList: initialPodcasts,
  setInitialList: jest.fn(),
  filter: "",
  setFilter: jest.fn(),
  filteredList: initialPodcasts,
  setFilteredList: jest.fn(),
};

describe("HomePage Component", () => {
  it("renders correctly", () => {
    const { container, getByPlaceholderText } = render(
      <FilterContext.Provider value={filterContextValues}>
        <HomePage />
      </FilterContext.Provider>
    );

    expect(container.querySelector("#loading-list")).toBeInTheDocument();

    expect(getByPlaceholderText("Filter podcasts...")).toBeInTheDocument();
  });
});
