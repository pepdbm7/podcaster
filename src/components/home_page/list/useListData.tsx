import { useContext, useEffect } from "react";
import {
  IFilterContext,
  IHeaderLoaderContext,
} from "../../../contexts/contexts.types";
import { FilterContext, HeaderLoaderContext } from "../../../contexts/contexts";
import { getPodcastsList } from "../../../utils/podcastList/api/api";

const useListData = () => {
  const { filteredList, setInitialList }: IFilterContext = useContext(
    FilterContext
  ) as IFilterContext;

  const { showLoader, setShowLoader }: IHeaderLoaderContext = useContext(
    HeaderLoaderContext
  ) as IHeaderLoaderContext;

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
