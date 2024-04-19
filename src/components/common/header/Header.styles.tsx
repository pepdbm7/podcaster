import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6em;
  box-shadow: rgb(99 99 99 / 25%) 0 1px 2px 0px;
`;

export const HeaderTitle = styled(Link)`
  font-size: 1.5em;
  font-weight: bold;
  color: var(--primary);
  letter-spacing: -1px;
  text-decoration: none;
  margin: 0;
  font-size: 1.1em;
`;

export const Loader = styled.span`
  border-radius: 50%;
  background-color: var(--primary);
  height: 1em;
  width: 1em;
`;
