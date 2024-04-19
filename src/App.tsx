import React, { createContext, useState } from "react";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { HOME_PATH, PODCAST_PATH, EPISODE_PATH } from "./consts/routes";
import Home from "./components/home/Home";
import Podcast from "./components/podcast/Podcast";
import Episode from "./components/episode/Episode";
import { PodcastEntry } from "./utils/api.types";

export interface ILoaderContext {
  showLoader: boolean;
  setShowLoader: (bool: boolean) => void;
}
export const LoaderContext = createContext<ILoaderContext | null>(null);
export interface IFilterContext {
  initialList: PodcastEntry[];
  setInitialList: (podcasts: PodcastEntry[]) => void;
  filter: string;
  setFilter: (string: string) => void;
  filteredList: PodcastEntry[];
  setFilteredList: (podcasts: PodcastEntry[]) => void;
}
export const FilterContext = createContext<IFilterContext | null>(null);

const App = () => {
  const [showLoader, setShowLoader] = useState(false);
  const [filter, setFilter] = useState("");
  const [initialList, setInitialList] = useState<PodcastEntry[]>([]);
  const [filteredList, setFilteredList] = useState<PodcastEntry[]>([]);

  return (
    <LoaderContext.Provider value={{ showLoader, setShowLoader }}>
      <FilterContext.Provider
        value={{
          initialList,
          setInitialList,
          filter,
          setFilter,
          filteredList,
          setFilteredList,
        }}
      >
        <Router>
          <Routes>
            <Route path={HOME_PATH} element={<Home />} />
            <Route path={PODCAST_PATH} element={<Podcast />} />
            <Route path={EPISODE_PATH} element={<Episode />} />
          </Routes>
        </Router>
      </FilterContext.Provider>
    </LoaderContext.Provider>
  );
};

export default App;
