import { getMappedPodcastDetails } from "../../utils/podcastDetails/api/api";
import { getMappedPodcastsList } from "../../utils/podcastList/api/api";

export const rawPodcasts = [
  {
    "im:name": {
      label: "The Joe Budden Podcast",
    },
    "im:image": [
      {
        label:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/55x55bb.png",
        attributes: {
          height: "55",
        },
      },
      {
        label:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/60x60bb.png",
        attributes: {
          height: "60",
        },
      },
      {
        label:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/170x170bb.png",
        attributes: {
          height: "170",
        },
      },
    ],
    summary: {
      label:
        "Tune into Joe Budden and his friends. Follow along the crazy adventures of these very random friends.",
    },
    "im:price": {
      label: "Get",
      attributes: {
        amount: "0",
        currency: "USD",
      },
    },
    "im:contentType": {
      attributes: {
        term: "Podcast",
        label: "Podcast",
      },
    },
    rights: {
      label: "© All rights reserved",
    },
    title: {
      label: "The Joe Budden Podcast - The Joe Budden Network",
    },
    link: {
      attributes: {
        rel: "alternate",
        type: "text/html",
        href: "https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=2",
      },
    },
    id: {
      label:
        "https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=2",
      attributes: {
        "im:id": "1535809341",
      },
    },
    "im:artist": {
      label: "The Joe Budden Network",
      attributes: {
        href: "https://podcasts.apple.com/us/artist/the-joe-budden-network/1535844019?uo=2",
      },
    },
    category: {
      attributes: {
        "im:id": "1310",
        term: "Music",
        scheme:
          "https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2",
        label: "Music",
      },
    },
    "im:releaseDate": {
      label: "2024-04-20T00:00:00-07:00",
      attributes: {
        label: "April 20, 2024",
      },
    },
  },
  {
    "im:name": {
      label: "Every Single Album",
    },
    "im:image": [
      {
        label:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts221/v4/69/db/d2/69dbd2ec-c1d4-9363-0439-49a294311566/mza_11177853187314768025.jpg/55x55bb.png",
        attributes: {
          height: "55",
        },
      },
      {
        label:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts221/v4/69/db/d2/69dbd2ec-c1d4-9363-0439-49a294311566/mza_11177853187314768025.jpg/60x60bb.png",
        attributes: {
          height: "60",
        },
      },
      {
        label:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts221/v4/69/db/d2/69dbd2ec-c1d4-9363-0439-49a294311566/mza_11177853187314768025.jpg/170x170bb.png",
        attributes: {
          height: "170",
        },
      },
    ],
    summary: {
      label:
        "Nora Princiotti and Nathan Hubbard are two pop music enthusiasts. Together, they break down every single album from some of your favorite stars, like Taylor Swift, Adele, and Harry Styles. Topics include favorite collaborators, track five meanings, where these artists get their inspiration, and more.",
    },
    "im:price": {
      label: "Get",
      attributes: {
        amount: "0",
        currency: "USD",
      },
    },
    "im:contentType": {
      attributes: {
        term: "Podcast",
        label: "Podcast",
      },
    },
    rights: {
      label: "© All rights reserved.",
    },
    title: {
      label: "Every Single Album - The Ringer",
    },
    link: {
      attributes: {
        rel: "alternate",
        type: "text/html",
        href: "https://podcasts.apple.com/us/podcast/every-single-album/id1592726009?uo=2",
      },
    },
    id: {
      label:
        "https://podcasts.apple.com/us/podcast/every-single-album/id1592726009?uo=2",
      attributes: {
        "im:id": "1592726009",
      },
    },
    "im:artist": {
      label: "The Ringer",
    },
    category: {
      attributes: {
        "im:id": "1523",
        term: "Music Commentary",
        scheme:
          "https://podcasts.apple.com/us/genre/podcasts-music-music-commentary/id1523?uo=2",
        label: "Music Commentary",
      },
    },
    "im:releaseDate": {
      label: "2024-04-16T03:00:00-07:00",
      attributes: {
        label: "April 16, 2024",
      },
    },
  },
];

export const localStoragePodcasts = {
  timestamp: 2535809341,
  podcasts: getMappedPodcastsList(rawPodcasts),
};

export const rawPodcastDetails = {
  resultCount: 4,
  results: [
    {
      wrapperType: "track",
      kind: "podcast",
      artistId: 1535844019,
      collectionId: 1535809341,
      trackId: 1535809341,
      artistName: "The Joe Budden Network",
      collectionName: "The Joe Budden Podcast",
      trackName: "The Joe Budden Podcast",
      collectionCensoredName: "The Joe Budden Podcast",
      trackCensoredName: "The Joe Budden Podcast",
      artistViewUrl:
        "https://podcasts.apple.com/us/artist/the-joe-budden-network/1535844019?uo=4",
      collectionViewUrl:
        "https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=4",
      feedUrl: "https://jbpod.libsyn.com/applepodcast",
      trackViewUrl:
        "https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=4",
      artworkUrl30:
        "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/30x30bb.jpg",
      artworkUrl60:
        "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/60x60bb.jpg",
      artworkUrl100:
        "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/100x100bb.jpg",
      collectionPrice: 0.0,
      trackPrice: 0.0,
      collectionHdPrice: 0,
      releaseDate: "2024-04-20T07:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "explicit",
      trackCount: 478,
      trackTimeMillis: 12680,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Music",
      contentAdvisoryRating: "Explicit",
      artworkUrl600:
        "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/600x600bb.jpg",
      genreIds: ["1310", "26"],
      genres: ["Music", "Podcasts"],
    },
    {
      country: "USA",
      artistIds: [1535844019],
      feedUrl: "https://jbpod.libsyn.com/applepodcast",
      previewUrl:
        "https://verifi.podscribe.com/rss/p/traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_718.mp3?dest-id=2422538",
      closedCaptioning: "none",
      releaseDate: "2024-04-20T07:00:00Z",
      episodeFileExtension: "mp3",
      artworkUrl160:
        "https://is1-ssl.mzstatic.com/image/thumb/Podcasts221/v4/c0/49/a8/c049a8c4-dec8-a57d-a497-07ef65592b14/mza_14843170295822596743.jpeg/160x160bb.jpg",
      episodeContentType: "audio",
      genres: [{ name: "Music", id: "1310" }],
      episodeGuid: "baa9f891-d5d3-42a2-9934-fba5e61a4193",
      description:
        "The JBP kicks off the latest episode reacting to Wale’s tweet about Melyssa Ford (26:56) before turning to new music including the buzz surrounding Taylor Swift’s album (42:02) as well as Drake’s ‘Push Ups’ hitting DSPs (44:33). The room then debates whether Drake moves OVO Fest with Future & Metro due to perform in Toronto the same weekend (53:35), more music from Nicki Minaj & Lucky Daye (1:26:35), and Miami is hosting a nude cruise come 2025 (1:49:21). Also, Shyne speaks on ‘99 club shooting in recent interview (2:02:18), Jontay Porter has been banned for life from the NBA (2:33:33), Nike inks Caitlin Clark to endorsement deal (2:43:03), and much more! \n Become a Patron of The Joe Budden Podcast for additional bonus episodes and visual content for all things JBP! Join our Patreon here: www.patreon.com/joebudden\n Sleeper Picks: \n Joe | Inayah - “Won’t Let Me”\n Ice | Tory Lanez - “When It’s Dark”\n Parks | Nas & DJ Premier - “Define My Name”\n Ish | MaKenzie - “Velvet”\n Melyssa | Äyanna - “Girlfriend”\n Emanny | WANMOR - “Alone With You”",
      trackId: 1000653044367,
      trackName: 'Episode 718 | "The PAWG Whisperer"',
      shortDescription:
        "The JBP kicks off the latest episode reacting to Wale’s tweet about Melyssa Ford (26:56) before turning to new music including the buzz surrounding Taylor Swift’s album (42:02) as well as Drake’s ‘Push Ups’ hitting DSPs (44:33). The room...",
      collectionId: 1535809341,
      collectionName: "The Joe Budden Podcast",
      episodeUrl:
        "https://verifi.podscribe.com/rss/p/traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_718.mp3?dest-id=2422538",
      artworkUrl600:
        "https://is1-ssl.mzstatic.com/image/thumb/Podcasts221/v4/c0/49/a8/c049a8c4-dec8-a57d-a497-07ef65592b14/mza_14843170295822596743.jpeg/600x600bb.jpg",
      artistViewUrl:
        "https://itunes.apple.com/us/artist/the-joe-budden-network/1535844019?mt=2&uo=4",
      collectionViewUrl:
        "https://itunes.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?mt=2&uo=4",
      trackViewUrl:
        "https://podcasts.apple.com/us/podcast/episode-718-the-pawg-whisperer/id1535809341?i=1000653044367&uo=4",
      artworkUrl60:
        "https://is1-ssl.mzstatic.com/image/thumb/Podcasts221/v4/c0/49/a8/c049a8c4-dec8-a57d-a497-07ef65592b14/mza_14843170295822596743.jpeg/60x60bb.jpg",
      trackTimeMillis: 12680000,
      contentAdvisoryRating: "Explicit",
      kind: "podcast-episode",
      wrapperType: "podcastEpisode",
    },
    {
      country: "USA",
      artistIds: [1535844019],
      feedUrl: "https://jbpod.libsyn.com/applepodcast",
      previewUrl:
        "https://verifi.podscribe.com/rss/p/traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_717.mp3?dest-id=2422538",
      closedCaptioning: "none",
      releaseDate: "2024-04-17T07:00:00Z",
      episodeFileExtension: "mp3",
      artworkUrl160:
        "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/160x160bb.jpg",
      episodeContentType: "audio",
      genres: [{ name: "Music", id: "1310" }],
      episodeGuid: "3bd1a98d-c6ca-47c5-b68a-66899d320426",
      description:
        "Fresh off the emergency pod discussing Drake and Rick Ross’ diss tracks, the JBP returns to address the business interests behind rap beef (23:25) before getting into rumors about Kendrick Lamar’s response, the AI track that hit the timeline (44:04), and Metro Boomin and Future announcing their tour ‘WE TRUST YOU’ (59:32). Jerrod Carmichael issues an apology to Dave Chappelle on The Breakfast Club (1:18:48), the room sends their best following the passing of Rico Wade (1:46:14), Kai Cenat is suing a woman who leaked is information (2:00:15), Part of the Show (2:16:05), and much more! \n Become a Patron of The Joe Budden Podcast for additional bonus episodes and visual content for all things JBP! Join our Patreon here: www.patreon.com/joebudden\n  \n Sleeper Picks: \n Joe | dvsn - “Take It Slow”\n Ice | Kodak Black - “Stressed Out”\n Parks | Goodie Mob - “Cell Therapy”\n Ish | Saint Harison - “ego talkin’ - A Colors Show”\n Melyssa | Jean Deaux (feat. DESTIN CONRAD) - “Thinkin”",
      trackId: 1000652705890,
      trackName: 'Epiode 717 | "The Cutlery Drawer"',
      shortDescription:
        "Fresh off the emergency pod discussing Drake and Rick Ross’ diss tracks, the JBP returns to address the business interests behind rap beef (23:25) before getting into rumors about Kendrick Lamar’s response, the AI track that hit the timeline...",
      collectionId: 1535809341,
      collectionName: "The Joe Budden Podcast",
      episodeUrl:
        "https://verifi.podscribe.com/rss/p/traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_717.mp3?dest-id=2422538",
      artworkUrl600:
        "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/600x600bb.jpg",
      artistViewUrl:
        "https://itunes.apple.com/us/artist/the-joe-budden-network/1535844019?mt=2&uo=4",
      collectionViewUrl:
        "https://itunes.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?mt=2&uo=4",
      trackViewUrl:
        "https://podcasts.apple.com/us/podcast/epiode-717-the-cutlery-drawer/id1535809341?i=1000652705890&uo=4",
      artworkUrl60:
        "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/60x60bb.jpg",
      trackTimeMillis: 11395000,
      contentAdvisoryRating: "Explicit",
      kind: "podcast-episode",
      wrapperType: "podcastEpisode",
    },
  ],
};

export const mappedEpisodes = getMappedPodcastDetails(rawPodcastDetails);

export const localStoragePodcastDetails = {
  1535809341: {
    timestamp: 1913786230472,
    podcastDetails: {
      details: {
        title: "The Joe Budden Podcast",
        artist: "The Joe Budden Network",
        imageUrl:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/100x100bb.jpg",
      },
      episodesCount: 1,
      episodes: [
        {
          id: 123456789,
          title: "The Joe Budden Podcast track 1",
          date: "20/04/2024",
          duration: "00:12",
        },
      ],
    },
  },
};
