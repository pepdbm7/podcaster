import React from "react";

import PodcastPage from "./PodcastPage";
import * as PodcastDetailsStorage from "../../utils/podcastDetails/storage/storage";
import { localStoragePodcastDetails } from "../../test/fixtures/mockedData";
import { render } from "../../test/helpers";

const spyOnGetLSPodcastDetails = jest.spyOn(
  PodcastDetailsStorage,
  "getLocalStoragePodcastDetails"
);
const podcastId = 1535809341;

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    podcastId,
  }),
}));

describe("PodcastPage Component", () => {
  it("renders correctly", async () => {
    spyOnGetLSPodcastDetails.mockImplementationOnce(
      () => localStoragePodcastDetails[podcastId]
    );

    const { getByText, findByText } = render(<PodcastPage />);

    expect(getByText("Podcaster")).toBeVisible();

    expect(
      await findByText(
        localStoragePodcastDetails[podcastId].podcastDetails.details.title
      )
    ).toBeVisible();
  });
});
