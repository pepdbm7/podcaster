import React, { useState, useContext, useEffect } from "react";
import { IFilterContext } from "../../../contexts/contexts.types";
import { FilterContext } from "../../../contexts/contexts";
import { getPodcastsList } from "../../../utils/podcastList/api/api";

const useListData = () => {
  const { filteredList, setInitialList }: IFilterContext = useContext(
    FilterContext
  ) as IFilterContext;
  console.log({ filteredList });
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const getInitialPodcastsList = async () => {
      const initialPodcastsList = await getPodcastsList(setShowLoader);
      console.log({ initialPodcastsList });
      setInitialList(initialPodcastsList);
    };

    getInitialPodcastsList();
  }, []);

  return { podcastsList: filteredList, showLoader };
};

export default useListData;
