import React from "react";

import EpisodePage from "./EpisodePage";
import * as PodcastDetailsStorage from "../../utils/podcastDetails/storage/storage";
import { localStoragePodcastDetails } from "../../test/fixtures/mockedData";
import { render } from "../../test/helpers";

const podcastId = 1535809341;
const episodeId = 123456789;

jest
  .spyOn(PodcastDetailsStorage, "getLocalStoragePodcastDetails")
  .mockImplementationOnce(() => localStoragePodcastDetails[podcastId]);

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    podcastId,
    episodeId,
  }),
}));

describe("EpisodePage Component", () => {
  it("renders correctly", async () => {
    const { getByText, findByText } = render(<EpisodePage />);

    expect(getByText("Podcaster")).toBeVisible();

    expect(
      await findByText(
        localStoragePodcastDetails[podcastId].podcastDetails.details.title
      )
    ).toBeVisible();
  });
});
