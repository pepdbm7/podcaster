import React from "react";

import { render } from "../../../test/helpers";
import { Header } from "./Header";

describe("Header Component", () => {
  it("renders correctly", () => {
    const headerText = "Podcaster";

    const { getByText, container } = render(<Header />);

    expect(getByText(headerText)).toBeVisible();

    const loader = container.querySelector("span");

    expect(loader).toBeVisible();
  });
});
