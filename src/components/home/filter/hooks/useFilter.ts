import { useContext, useEffect } from "react";

import { PodcastEntry } from "../../../../utils/api.types";
import { FilterContext, IFilterContext } from "../../../../App";

const getCaseInsensitiveCoincidences = (a: string, b: string) =>
  a.toLowerCase().includes(b.toLowerCase());

export const useFilter = () => {
  const {
    initialList,
    filteredList,
    setFilteredList,
    filter,
    setFilter,
  }: IFilterContext = useContext(FilterContext) as IFilterContext;

  useEffect(() => {
    const newPodcasts = initialList?.filter(
      (podcast: PodcastEntry) =>
        getCaseInsensitiveCoincidences(podcast.title.label, filter) ||
        getCaseInsensitiveCoincidences(podcast["im:artist"].label, filter)
    );
    setFilteredList(newPodcasts);
  }, [filter]);

  useEffect(() => {
    setFilteredList(initialList);
  }, [initialList]);

  return { filteredList, filter, setFilter };
};
