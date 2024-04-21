import React from "react";
import { MappedEpisode, MappedPodcastDetails } from "../../../utils/api.types";
import EpisodesListSkeleton from "./EpisodesListSkeleton";
import {
  EpisodesCounterTitle,
  EpisodesCounterWrapper,
  EpisodesWrapper,
  Table,
} from "./EpisodesList.styles";
import { Link } from "react-router-dom";

const columnNames = ["title", "date", "duration"];

const EpisodesList = ({
  data,
  showLoader,
  podcastId,
}: {
  data: MappedPodcastDetails | null;
  showLoader: boolean;
  podcastId?: string;
}) => {
  if (showLoader) return <EpisodesListSkeleton />;

  return (
    <EpisodesWrapper>
      <EpisodesCounterWrapper>
        <EpisodesCounterTitle>
          Episodes: {data?.episodesCount}
        </EpisodesCounterTitle>
      </EpisodesCounterWrapper>
      <Table>
        <thead>
          <tr>
            {columnNames?.map((name: string, i) => (
              <th key={`${name}-${i}`}>{name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.episodes?.map((episode: MappedEpisode, i) => (
            <tr key={`${i}`}>
              {columnNames.map((name, j) =>
                j === 0 ? (
                  <td key={`${j}`}>
                    <Link
                      to={`/podcast/${podcastId}/episode/${episode.id}`}
                    >{`${episode[name as keyof MappedEpisode]}`}</Link>
                  </td>
                ) : (
                  <td key={`${j}`}>{`${
                    episode[name as keyof MappedEpisode]
                  }`}</td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </Table>
    </EpisodesWrapper>
  );
};

export default EpisodesList;
