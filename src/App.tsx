import React, { createContext, useState } from "react";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { HOME_PATH, PODCAST_PATH, EPISODE_PATH } from "./consts/routes";
import Home from "./components/home/Home";
import Podcast from "./components/podcast/Podcast";
import Episode from "./components/episode/Episode";

export interface ILoaderContext {
  isLoading: boolean;
  setIsLoading: (bool: boolean) => void;
}
export const LoaderContext = createContext<ILoaderContext | null>(null);

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
      <Router>
        <Routes>
          <Route path={HOME_PATH} element={<Home />} />
          <Route path={PODCAST_PATH} element={<Podcast />} />
          <Route path={EPISODE_PATH} element={<Episode />} />
        </Routes>
      </Router>
    </LoaderContext.Provider>
  );
};

export default App;
