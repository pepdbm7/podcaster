import React from "react";

import Layout from "./Layout";
import { render } from "../../../test/helpers";

describe("Layout Component", () => {
  it("renders children correctly", () => {
    const headerText = "Podcaster";
    const childText = "hello";

    const { getByText } = render(<Layout>{childText}</Layout>);

    expect(getByText(childText)).toBeVisible();
    expect(getByText(headerText)).toBeVisible();
  });
});
