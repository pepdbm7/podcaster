import React from "react";
import { FilterWrapper, ResultsCounter, FilterInput } from "./Filter.styles";
import { useFilter } from "./hooks/useFilter";

const Filter = () => {
  const { filteredList, filter, setFilter } = useFilter();

  return (
    <FilterWrapper>
      <ResultsCounter>{filteredList?.length}</ResultsCounter>
      <FilterInput
        placeholder="Filter podcasts..."
        value={filter}
        onChange={(event) => {
          setFilter(event.target.value);
        }}
      />
    </FilterWrapper>
  );
};

export default Filter;
