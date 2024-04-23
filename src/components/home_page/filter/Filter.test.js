import React from "react";

import Filter from "./Filter";
import { render, userEvent } from "../../../test/helpers";
import { FilterContext } from "../../../contexts/contexts";
import * as ListStorage from "../../../utils/podcastList/storage/storage";
import {
  localStoragePodcasts,
  rawPodcasts,
} from "../../../test/fixtures/mockedData";
import { getMappedPodcastsList } from "../../../utils/podcastList/api/api";

jest
  .spyOn(ListStorage, "getLocalStoragePodcasts")
  .mockImplementationOnce(() => localStoragePodcasts);

const mockSetFilter = jest.fn();
const initialPodcasts = getMappedPodcastsList(rawPodcasts);
const filterContextValues = {
  initialList: initialPodcasts,
  setInitialList: jest.fn(),
  filter: "",
  setFilter: mockSetFilter,
  filteredList: initialPodcasts,
  setFilteredList: jest.fn(),
};

describe("Filter Component", () => {
  it("renders correctly", async () => {
    const { getByPlaceholderText, getByText } = render(
      <FilterContext.Provider value={filterContextValues}>
        <Filter />
      </FilterContext.Provider>
    );

    const input = getByPlaceholderText("Filter podcasts...");

    expect(input).toBeVisible();

    expect(getByText(localStoragePodcasts.podcasts.length)).toBeVisible();
  });

  it("input works correctly", () => {
    const { getByPlaceholderText } = render(
      <FilterContext.Provider value={filterContextValues}>
        <Filter />
      </FilterContext.Provider>
    );

    const input = getByPlaceholderText("Filter podcasts...");

    userEvent.type(input, "j");

    expect(mockSetFilter).toBeCalledWith("j");
  });
});
