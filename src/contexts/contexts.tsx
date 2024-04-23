import { createContext } from "react";
import { IFilterContext, IHeaderLoaderContext } from "./contexts.types";

export const HeaderLoaderContext = createContext<IHeaderLoaderContext | null>(
  null
);

export const FilterContext = createContext<IFilterContext | null>(null);
