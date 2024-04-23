import { useState } from "react";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { HOME_PATH, PODCAST_PATH, EPISODE_PATH } from "./consts/routes";
import HomePage from "./components/home_page/HomePage";
import PodcastPage from "./components/podcast_page/PodcastPage";
import EpisodePage from "./components/episode_page/EpisodePage";
import { MappedPodcastEntry } from "./utils/podcastList/api/api.types";
import { FilterContext, HeaderLoaderContext } from "./contexts/contexts";

const App = () => {
  const [showLoader, setShowLoader] = useState(false);
  const [filter, setFilter] = useState("");
  const [initialList, setInitialList] = useState<MappedPodcastEntry[]>([]);
  const [filteredList, setFilteredList] = useState<MappedPodcastEntry[]>([]);

  return (
    <HeaderLoaderContext.Provider value={{ showLoader, setShowLoader }}>
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
    </HeaderLoaderContext.Provider>
  );
};

export default App;
