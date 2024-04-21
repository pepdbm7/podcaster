import styled from "styled-components";

export const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.75em;
  margin: 1.5em 0 4.5em;
`;

export const ResultsCounter = styled.span`
  padding: 4px 4px 2px;
  color: var(--secondary-light);
  background: var(--primary);
  border-radius: 8px;
`;

export const FilterInput = styled.input`
  padding: 0.6em;
  border-radius: 3%;
  border: 1px solid var(--secondary-medium);
  color: var(--secondary-medium);
`;
