import styled from "styled-components";

export const EpisodesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const EpisodesCounterWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1.3em;
  box-shadow: var(--shadow-lg);
  margin-bottom: 1.5em;
`;

export const EpisodesCounterTitle = styled.h2`
  font-size: 1.5em;
  font-weight: bold;
  color: var(--secondary-dark);
  margin: 0;
`;

export const Table = styled.table`
  padding: 1.5em;
  box-shadow: var(--shadow-lg);

  th,
  td {
    text-transform: capitalize;
    text-align: left;
    color: var(--secondary-dark);
  }

  th:nth-of-type(1),
  td:nth-of-type(1) {
    width: 60%;
  }

  th:nth-of-type(2),
  td:nth-of-type(2),
  th:nth-of-type(3),
  td:nth-of-type(3) {
    width: 20%;
  }

  tbody > tr > td:nth-of-type(1) {
    color: var(--primary);
  }

  tbody > tr:nth-child(odd) {
    background-color: var(--secondary-light);
  }

  thead > tr {
    box-shadow: var(--secondary-medium) 0px 2px 0px -1px;
    height: 2.5em;
  }
`;
