import React from "react";

import { render } from "../../../test/helpers";
import SideBox from "./SideBox";
import * as PodcastDetailsApi from "../../../utils/podcastDetails/api/api";

const spyOnGetPodcastSummary = jest.spyOn(
  PodcastDetailsApi,
  "getPodcastSummary"
);

describe("SideBox Component", () => {
  it("renders correctly", () => {
    const sideBoxProps = {
      details: {
        title: "title",
        artist: "artist",
        imageUrl: "https://google.com/",
      },
      showLoader: false,
    };

    spyOnGetPodcastSummary.mockImplementationOnce(() => "A random summary");

    const { getByText, getByAltText } = render(<SideBox {...sideBoxProps} />);

    expect(getByText(sideBoxProps.details.title)).toBeVisible();
    expect(getByText(sideBoxProps.details.artist)).toBeVisible();

    const image = getByAltText(sideBoxProps.details.title);
    expect(image.src).toBe(sideBoxProps.details.imageUrl);
  });

  it("renders skeleton on loading data", () => {
    const sideBoxProps = {
      details: {
        title: "title",
        artist: "artist",
        imageUrl: "https://google.com/",
      },
      showLoader: true,
    };

    const { container, queryByText } = render(<SideBox {...sideBoxProps} />);

    expect(container.querySelector("#loading-sidebox")).toBeInTheDocument();
    expect(queryByText(sideBoxProps.details.title)).not.toBeInTheDocument();
    expect(queryByText(sideBoxProps.details.artist)).not.toBeInTheDocument();
  });
});
