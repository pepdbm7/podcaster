import React from "react";
import { FilterWrapper } from "./Filter.styles";
import { useFilter } from "./hooks/useFilter";

const Filter = () => {
  const { filteredList, filter, setFilter } = useFilter();

  return (
    <FilterWrapper>
      <div>{filteredList.length}</div>
      <input
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
