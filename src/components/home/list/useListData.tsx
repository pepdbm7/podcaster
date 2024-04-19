import React, { useContext, useEffect } from "react";
import { FilterContext, IFilterContext } from "../../../App";
import { getPodcastsList } from "../../../utils/api";

const useListData = () => {
  const { filteredList, setInitialList }: IFilterContext = useContext(
    FilterContext
  ) as IFilterContext;

  useEffect(() => {
    const getInitialPodcastsList = async () => {
      const initialPodcastsList = await getPodcastsList();
      setInitialList(initialPodcastsList);
    };

    getInitialPodcastsList();
  }, []);

  return { podcastsList: filteredList };
};

export default useListData;
