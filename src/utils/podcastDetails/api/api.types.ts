interface Genre {
  name: string;
  id: string;
}

interface Episode {
  wrapperType: string;
  kind: string;
  artistId?: number;
  collectionId: number;
  trackId: number;
  artistName?: string;
  collectionName: string;
  trackName: string;
  collectionCensoredName?: string;
  trackCensoredName?: string;
  artistViewUrl: string;
  collectionViewUrl: string;
  feedUrl: string;
  trackViewUrl: string;
  artworkUrl30?: string;
  artworkUrl60: string;
  artworkUrl100?: string;
  collectionPrice?: number;
  trackPrice?: number;
  collectionHdPrice?: number;
  releaseDate: Date | string;
  collectionExplicitness?: string;
  trackExplicitness?: string;
  trackCount?: number;
  trackTimeMillis: number;
  country: string;
  currency?: string;
  primaryGenreName?: string;
  artworkUrl600: string;
  genreIds?: string[];
  genres: Array<Genre | string>;
  previewUrl?: string;
  closedCaptioning?: string;
  artistIds?: number[];
  episodeGuid?: string;
  description?: string;
  shortDescription?: string;
  artworkUrl160?: string;
  episodeFileExtension?: string;
  episodeUrl?: string;
  episodeContentType?: string;
  contentAdvisoryRating?: string;
}

export interface Podcast {
  resultCount: number;
  results: Episode[];
}

export interface MappedPodcastBoxDetails {
  title?: string;
  artist?: string;
  imageUrl?: string;
}

export interface MappedEpisode {
  id?: number;
  title?: string;
  date?: Date | string;
  duration?: string;
  description?: string;
  previewSrc?: string;
}

export interface MappedPodcastDetails {
  details: MappedPodcastBoxDetails;
  episodesCount: number;
  episodes: MappedEpisode[];
}
