import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const HeaderTitle = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  color: var(--primary);
  text-decoration: none;
`;

export const Loader = styled.span`
  border-radius: 50%;
  background-color: var(--primary);
  height: 16px;
  width: 16px;
`;
