import styled from "styled-components";
import { Link } from "react-router-dom";

const shimmerEffect = `
  -webkit-mask: linear-gradient(-60deg, #000 30%, #0005, #000 70%) right/300%
    100%;
  animation: shimmer 1s infinite;

  @keyframes shimmer {
    100% {
      -webkit-mask-position: left;
    }
  }`;

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6em;
  box-shadow: rgb(99 99 99 / 25%) 0 1px 2px 0px;
`;

export const HeaderTitle = styled(Link)<{ isLoading: boolean }>`
  font-size: 1.5em;
  font-weight: bold;
  color: var(--primary);
  letter-spacing: -1px;
  text-decoration: none;
  margin: 0;
  font-size: 1.1em;

  ${(props) => props.isLoading && shimmerEffect}
`;

export const Loader = styled.span`
  border-radius: 50%;
  background-color: var(--primary);
  height: 1.3em;
  width: 1.3em;
  margin-right: 0.8em;

  ${shimmerEffect}
`;
