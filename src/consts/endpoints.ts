const allowOriginsPrefix = "https://api.allorigins.win/get?url=";

export const PODCASTS_LIST_URL = `${allowOriginsPrefix}https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json`;

// //here we don't use the prefix as it returns only 1 episode per podcast, so now we can see the episodes table full of content:
// export const PODCAST_DETAILS_URL = `https://itunes.apple.com/lookup?id=:podcastId&media=podcast&entity=podcastEpisode&limit=20`;

export const PODCAST_DETAILS_URL = `${allowOriginsPrefix}https://itunes.apple.com/lookup?id=:podcastId&media=podcast&entity=podcastEpisode&limit=20`;
