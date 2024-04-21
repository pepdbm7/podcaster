import React, { useState, useContext, useEffect } from "react";
import { FilterContext, IFilterContext } from "../../../App";
import { getPodcastsList } from "../../../utils/api";

const useListData = () => {
  const { filteredList, setInitialList }: IFilterContext = useContext(
    FilterContext
  ) as IFilterContext;

  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const getInitialPodcastsList = async () => {
      const initialPodcastsList = await getPodcastsList(setShowLoader);
      setInitialList(initialPodcastsList);
    };

    getInitialPodcastsList();
  }, []);

  return { podcastsList: filteredList, showLoader };
};

export default useListData;
