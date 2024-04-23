import React from "react";

import { MemoryRouter } from "react-router-dom";

import { render } from "./test/helpers";
import App from "./App";
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  BrowserRouter: ({ children }) => <div>{children}</div>,
}));

describe("App Component", () => {
  it("renders correctly", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    expect(container.querySelector("#loading-list")).toBeInTheDocument();
  });
});
