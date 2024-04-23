import React from "react";

import { render } from "../../../test/helpers";
import EpisodeDetails from "./EpisodeDetails";

describe("EpisodeDetails Component", () => {
  const episodeDetailsProps = {
    episode: {
      title: "title",
      description: "description",
      previewSrc: "previewSrc",
    },
    showLoader: false,
  };

  it("renders correctly", () => {
    const { getByText, getByTestId } = render(
      <EpisodeDetails {...episodeDetailsProps} />
    );

    expect(getByText(episodeDetailsProps.episode.title)).toBeVisible();
    expect(getByText(episodeDetailsProps.episode.description)).toBeVisible();
    expect(getByTestId("track_player")).toBeVisible();
  });

  it("renders skeleton on loading data", () => {
    episodeDetailsProps.showLoader = true;

    const { container, queryByText } = render(
      <EpisodeDetails {...episodeDetailsProps} />
    );

    expect(
      container.querySelector("#loading-episode_details")
    ).toBeInTheDocument();
    expect(
      queryByText(episodeDetailsProps.episode.title)
    ).not.toBeInTheDocument();
    expect(
      queryByText(episodeDetailsProps.episode.description)
    ).not.toBeInTheDocument();
  });
});
