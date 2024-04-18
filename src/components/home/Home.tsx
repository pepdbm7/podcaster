import React, { Suspense, lazy } from "react";

import { useFilter } from "./hooks/useFilter";

import { PodcastEntry } from "../../utils/api.types";
import { Main } from "./Home.styles";

// import Card from "./card/Card";
const LazyLoadedCard = lazy(() => import("./card/Card"));

const Home = () => {
  const { filteredList, filter, setFilter } = useFilter();

  //  return <main className="App">
  //   <header className="App-header">
  //     <h1>Podcaster</h1>
  //     <span/>
  //   </header>
  // </main>
  return (
    <Main>
      <div>
        <div>{filteredList.length}</div>
        <input
          placeholder="Filter podcasts..."
          value={filter}
          onChange={(event) => {
            setFilter(event.target.value);
          }}
        />
      </div>
      <div>
        <Suspense fallback={<>loading...</>}>
          <h1>Podcasts Grid here:</h1>
          {filteredList?.map((podcast: PodcastEntry) => (
            <LazyLoadedCard data={podcast} />
          ))}
        </Suspense>
      </div>
    </Main>
  );
};

export default Home;
