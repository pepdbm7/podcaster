import React, { useContext, useEffect } from "react";
import {
  FilterContext,
  IFilterContext,
  ILoaderContext,
  LoaderContext,
} from "../../../App";
import { getPodcastsList } from "../../../utils/api";

const useListData = () => {
  const { filteredList, setInitialList }: IFilterContext = useContext(
    FilterContext
  ) as IFilterContext;
  const { setShowLoader }: ILoaderContext = useContext(
    LoaderContext
  ) as ILoaderContext;

  useEffect(() => {
    const getInitialPodcastsList = async () => {
      const initialPodcastsList = await getPodcastsList(setShowLoader);
      setInitialList(initialPodcastsList);
    };

    getInitialPodcastsList();
  }, []);

  return { podcastsList: filteredList };
};

export default useListData;
