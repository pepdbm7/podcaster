import React from "react";

import { render, userEvent } from "../../../test/helpers";
import EpisodesList from "./EpisodesList";
import { mappedEpisodes } from "../../../test/fixtures/mockedData";

describe("EpisodesList Component", () => {
  const episodesListProps = {
    data: mappedEpisodes,
    showLoader: false,
    podcastId: "123456789",
  };

  it("renders correctly", async () => {
    const { getByText, findByText, getByTestId, findAllByText } = render(
      <EpisodesList {...episodesListProps} />
    );

    expect(
      await findByText(`Episodes: ${episodesListProps.data.episodesCount}`)
    ).toBeVisible();

    episodesListProps.data.episodes?.map((episode) => {
      expect(getByText(episode.title)).toBeVisible();
      expect(findAllByText(episode.date)).toBeTruthy();
      expect(getByText(episode.duration)).toBeVisible();

      const link = getByTestId(`link_${episode.id}`);
      userEvent.click(link);

      expect(link).toHaveAttribute(
        "href",
        `/podcast/${episodesListProps.podcastId}/episode/${episode.id}`
      );
    });
  });

  it("renders skeleton on loading data", () => {
    episodesListProps.showLoader = true;

    const { container } = render(<EpisodesList {...episodesListProps} />);

    expect(
      container.querySelector("#loading-episodesList")
    ).toBeInTheDocument();
  });
});
