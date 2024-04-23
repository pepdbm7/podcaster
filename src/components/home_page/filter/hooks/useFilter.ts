import { useContext, useEffect } from "react";

import { MappedPodcastEntry } from "../../../../utils/podcastList/api/api.types";
import { IFilterContext } from "../../../../contexts/contexts.types";
import { FilterContext } from "../../../../contexts/contexts";

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
    console.log({ filter, initialList });
    setFilteredList(newPodcasts);
  }, [filter]);

  useEffect(() => {
    setFilteredList(initialList);
  }, [initialList]);

  return { filteredList, filter, setFilter };
};
