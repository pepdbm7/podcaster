import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled(Link)`
  text-align: center;
  padding: 5em 1em 1em;
  text-decoration: none;
  position: relative;
  box-shadow: rgb(99 99 99 / 25%) 0px 2px 5px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  align-self: baseline;
`;

export const Image = styled.img`
  border-radius: 50%;
  position: absolute;
  top: -3em;
  width: 50%;
`;

export const Title = styled.h4`
  margin: 0 0 1em;
  font-weight: bold;
  color: var(--secondary-dark);
  font-size: 1em;
  text-transform: uppercase;
`;

export const Author = styled.p`
  margin: 0;
  color: var(--secondary-medium);
  font-size: 0.9em;
`;
