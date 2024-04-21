import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  padding: 1.5em 1.8em;
  width: 15em;
  box-shadow: var(--shadow-lg);

  hr {
    border-top: var(--secondary-light);
    margin: 1.3em 0;
  }

  a {
    text-decoration: none;
    color: var(--secondary-dark);
  }
`;

export const PocastImageWrapper = styled(Link)`
  width: 12em;
  height: 12em;
  margin: auto;
`;

export const PodcastImage = styled.img`
  width: 100%;
  border-radius: 3%;
`;

export const PodcastTitle = styled.h3`
  font-weight: bold;
  margin: 0;
  font-size: 0.9em;
`;

export const PodcastArtist = styled.p`
  font-size: 0.9em;
  margin: 0;
`;

export const PodcastSummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PodcastSummaryTitle = styled.h4`
  font-weight: bold;
  margin: 0;
`;

export const PodcastSummary = styled.p`
  margin: 0.5em 0 0;
  font-style: italic;
  overflow-wrap: break-word;
  color: var(--secondary-dark);
`;
