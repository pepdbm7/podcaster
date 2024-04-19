const allowOriginsPrefix = "https://api.allorigins.win/get?url=";

export const PODCASTS_LIST_URL = `${allowOriginsPrefix}https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json`;

export const PODCAST_DETAILS_URL = `${allowOriginsPrefix}https://itunes.apple.com/lookup?id=:podcastId&media=podcast&entity=podcastEpisode&limit=20`;
