import React, { createContext, useState } from "react";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { HOME_PATH, PODCAST_PATH, EPISODE_PATH } from "./consts/routes";
import HomePage from "./components/home_page/HomePage";
import PodcastPage from "./components/podcast_page/PodcastPage";
import EpisodePage from "./components/episode_page/EpisodePage";
import { MappedPodcastEntry } from "./utils/api.types";

export interface ILoaderContext {
  showLoader: boolean;
  setShowLoader: (bool: boolean) => void;
}
export const LoaderContext = createContext<ILoaderContext | null>(null);

//we could wrap only home component with filter context as it is only used in that view, but by leaving it here we'll see the filters as they were when we navigate back to home page
export interface IFilterContext {
  initialList: MappedPodcastEntry[];
  setInitialList: (podcasts: MappedPodcastEntry[]) => void;
  filter: string;
  setFilter: (string: string) => void;
  filteredList: MappedPodcastEntry[];
  setFilteredList: (podcasts: MappedPodcastEntry[]) => void;
}
export const FilterContext = createContext<IFilterContext | null>(null);

const App = () => {
  const [showLoader, setShowLoader] = useState(false);
  const [filter, setFilter] = useState("");
  const [initialList, setInitialList] = useState<MappedPodcastEntry[]>([]);
  const [filteredList, setFilteredList] = useState<MappedPodcastEntry[]>([]);

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
            <Route path={HOME_PATH} element={<HomePage />} />
            <Route path={PODCAST_PATH} element={<PodcastPage />} />
            <Route path={EPISODE_PATH} element={<EpisodePage />} />
          </Routes>
        </Router>
      </FilterContext.Provider>
    </LoaderContext.Provider>
  );
};

export default App;
