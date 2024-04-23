import React from "react";

import EpisodePage from "./EpisodePage";
import { render } from "../../test/helpers";

describe("EpisodePage Component", () => {
  it("renders correctly loading", () => {
    const { getByText, container } = render(<EpisodePage />);

    expect(getByText("Podcaster")).toBeVisible();

    expect(container.querySelector("#loading-sidebox")).toBeInTheDocument();
    expect(
      container.querySelector("#loading-episode_details")
    ).toBeInTheDocument();
  });
});
