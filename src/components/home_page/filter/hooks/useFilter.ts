import { useContext, useEffect } from "react";

import { MappedPodcastEntry } from "../../../../utils/api.types";
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
      (podcast: MappedPodcastEntry) =>
        getCaseInsensitiveCoincidences(podcast.title, filter) ||
        getCaseInsensitiveCoincidences(podcast.artist, filter)
    );
    setFilteredList(newPodcasts);
  }, [filter]);

  useEffect(() => {
    setFilteredList(initialList);
  }, [initialList]);

  return { filteredList, filter, setFilter };
};
