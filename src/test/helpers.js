/* eslint-disable no-undef */
import React from "react";
import { BrowserRouter } from "react-router-dom";

import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { HeaderLoaderContext } from "../contexts/contexts";

const headerLoaderContextValues = {
  showLoader: true,
  setShowLoader: jest.fn(),
};

const AllProviders = ({ children }) => {
  return (
    <HeaderLoaderContext.Provider value={headerLoaderContextValues}>
      <BrowserRouter>{children}</BrowserRouter>
    </HeaderLoaderContext.Provider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllProviders, ...options });

export { customRender as render, userEvent, waitFor };
