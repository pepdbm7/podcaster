import React from "react";
import { render } from "../../../test/helpers";

import Card from "./Card";

const mockedProps = {
  id: 123,
  title: "Title",
  artist: "Artist",
  imageUrl: "http://www.google.com/",
  summary: "lorem ipsum",
};

describe("Card Component", () => {
  it("renders correctly", () => {
    const { getByRole, getByText } = render(<Card data={mockedProps} />);

    const image = getByRole("img");

    expect(image.src).toBe(mockedProps.imageUrl);

    expect(getByText(mockedProps.title)).toBeVisible();
    expect(getByText(`Author: ${mockedProps.artist}`)).toBeVisible();
  });
});
