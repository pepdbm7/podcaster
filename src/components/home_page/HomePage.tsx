// @ts-nocheck
import React, { Suspense, lazy } from "react";

import ListSkeleton from "./listSkeleton/ListSkeleton";
import Layout from "../common/layout/Layout";
import Filter from "./filter/Filter";

const LazyLoadedList = lazy(() => import("./list/List"));

const HomePage = () => (
  <Layout>
    <Filter />
    <Suspense fallback={<ListSkeleton />}>
      <LazyLoadedList />
    </Suspense>
  </Layout>
);

export default HomePage;
