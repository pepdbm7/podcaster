// @ts-nocheck
import { Suspense, lazy } from "react";

import ListSkeleton from "./listSkeleton/ListSkeleton";
import Layout from "../common/layout/Layout";
import Filter from "./filter/Filter";

import PodcastList from "./list/List";

const HomePage = () => (
  <Layout>
    <Filter />
    <Suspense fallback={<ListSkeleton />}>
      <PodcastList />
    </Suspense>
  </Layout>
);

export default HomePage;
