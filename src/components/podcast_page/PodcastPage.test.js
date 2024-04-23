import React from "react";

import PodcastPage from "./PodcastPage";
import { render } from "../../test/helpers";

describe("PodcastPage Component", () => {
  it("renders correctly loading", () => {
    const { getByText, container } = render(<PodcastPage />);

    expect(getByText("Podcaster")).toBeVisible();

    expect(container.querySelector("#loading-sidebox")).toBeInTheDocument();
    expect(
      container.querySelector("#loading-episodesList")
    ).toBeInTheDocument();
  });
});
