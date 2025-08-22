import { ProjectInfo, TalkData, TalkRef } from '@/types';

export const CompanyLogo = '/paul_300x300_crop.png';

export const projects: ProjectInfo[] = [
  {
    heroSrc: `/assets/shc_1.jpg`,
    logoSrc: `/assets/scramble_logo.png`,
    title: `Scramble Heart City`,
    description: `3v3 tag team fighting game`,
    dateClosedAlpha: `2025`,
    dateHopefulLaunch: `2026`,
    // todo include private playtest link?
    // https://playtest.mpaul.games
    links: [
      {
        label: 'wishlist on Steam',
        url: 'https://store.steampowered.com/app/3041800/Scramble_Heart_City/',
      },
      {
        label: 'join the Discord',
        url: 'https://discord.gg/6hbrfUgZJB',
      },
      {
        label: 'learn more',
        url: 'https://scrambleheart.city',
      },
      // {
      //   label: 'join the mailing list',
      //   url: 'https://forms.gle/LSc9YWop2oSNqPdAA',
      // },
    ],
  },
  {
    heroSrc: `/assets/tla_hero.jpg`,
    logoSrc: `/assets/tla_logo_vert.png`,
    title: `Tough Love Arena`,
    description: `Beginner friendly fighting game`,
    dateEarlyAccess: `2021`,
    dateHopefulLaunch: `2025`,
    links: [
      {
        label: 'play on web',
        url: `https://toughlovearena.com`,
      },
      {
        label: 'buy on Steam',
        url: 'https://store.steampowered.com/app/1807330/Tough_Love_Arena/',
      },
      {
        label: 'learn more',
        url: `https://about.toughlovearena.com`,
      },
    ],
  },
];
export const talkDatas: TalkData[] = [
  {
    date: new Date('2025-08-23 14:15 EDT'),
    timeZone: 'America/New_York',
    title: 'How to Design a Fighting Game',
    event: 'Anime NYC',
    eventUrl:
      'https://animenyc.com/programming/#/event/how-to-design-a-fighting-game',
    resources: [
      {
        label: 'Slideshow',
        url: 'https://docs.google.com/presentation/d/1RwvkLXTgdlhFkg6llKDseYNbLZC-uXyR4bQNxRIvrFc/',
      },
    ],
  },
  {
    date: new Date('2025-02-19 18:00 EDT'),
    timeZone: 'America/New_York',
    title: 'Fighting in the Browser',
    event: 'Gumbo Show & Tell',
    eventUrl: 'https://gumbonyc.org/',
    resources: [
      {
        label: 'Slideshow',
        url: 'https://docs.google.com/presentation/d/1sXWzXE-8hPDU2RrQDUmlQ4u6bjq6gdwgNhyhE5n-5h4/edit?usp=sharing',
      },
    ],
  },
  {
    date: new Date('2024-11-30 13:00 EDT'),
    timeZone: 'America/New_York',
    title: 'How to Design a Fighting Game',
    event: 'Indie Game Academy',
    eventUrl: 'https://indiegameacademy.com/',
    resources: [
      {
        label: 'Slideshow',
        url: 'https://docs.google.com/presentation/d/e/2PACX-1vRal2IlLcIm5_o-HIk_pIQhyrPtKLOIFOyYQPskyQQjrTNP86JC2nxAF4Wb1GQjGuJ5mtaE15qRM3wv/pub',
      },
      {
        label: 'Stream recording',
        url: 'https://www.youtube.com/watch?v=5jU7w20XUHs',
      },
    ],
  },
  {
    date: new Date('2024-06-22 14:30 EDT'),
    timeZone: 'America/New_York',
    title: 'How to Design a Fighting Game',
    event: 'Waffle Games 7.0',
    eventUrl: 'https://www.egdcollective.org/wafflegames2024',
    resources: [
      {
        label: 'Slideshow',
        url: 'https://docs.google.com/presentation/d/e/2PACX-1vRWTv0jZrnigsAvoPzYb9_sVg91WlsFQLT9QaLdWDGW68ZiKip__kQ99TkbJBNYYyWMglfrrXbM6baJ/pub',
      },
    ],
  },
  {
    date: new Date('2024-03-29 16:00 PDT'),
    timeZone: 'America/Los_Angeles',
    title: 'How to Design a Fighting Game',
    event: 'Sakuracon',
    eventUrl: 'https://sakuracon.org/programming/panels/',
    resources: [
      {
        label: 'Slideshow',
        url: 'https://docs.google.com/presentation/d/e/2PACX-1vSkdHnpOlyBnsKVOvqkzTlXXmSbq5hCKsWOnY9wqV8b4ACgmWhsiZigW4Dsa4X0v-P9psei3mJ64RKS/pub',
      },
    ],
  },
  {
    date: new Date('2023-04-15 18:30 EDT'),
    timeZone: 'America/New_York',
    title: `Designing Fighting Games & How to Balance Post Launch`,
    event: 'Waffle Games 6.0',
    eventUrl: `https://www.egdcollective.org/wafflegames2023`,
    resources: [
      {
        label: 'Slideshow',
        url: `https://docs.google.com/presentation/d/e/2PACX-1vSTVezembBnwYagCbRLN-30U7gs6jBbN4MIHdQ3oUOyQ456m-Sfa_xroHAZQkZOR6gA3cbqmsGxZMj3/pub?start=false&loop=false&delayms=3000`,
      },
    ],
  },
  {
    date: new Date('2022-08-05 14:00 PDT'),
    timeZone: 'America/Los_Angeles',
    title: 'Tough Love Arena - Developer Panel',
    event: 'EVO',
    eventUrl: 'https://evo.gg',
    resources: [
      {
        label: 'YouTube',
        url: 'https://www.youtube.com/watch?v=AyYXqth8RZg',
      },
    ],
  },
  {
    date: new Date('2022-08-05 16:00 PDT'),
    timeZone: 'America/Los_Angeles',
    title: 'State of the Indie FGC',
    event: 'EVO',
    eventUrl: 'https://evo.gg',
    resources: [
      {
        label: 'YouTube',
        url: 'https://www.youtube.com/watch?v=AyYXqth8RZg',
      },
    ],
  },
];

export const talkRefs: TalkRef[] = [
  {
    label: `Magic: the Gathering: 20 Years, 20 Lessons Learned`,
    url: 'https://www.youtube.com/watch?v=QHHg99hwQGY',
  },
  {
    label: 'What is Rollback Netcode? by Muno',
    url: 'https://bymuno.com/post/rollback',
  },
  {
    label:
      '8 Frames in 16ms: Rollback Networking in Mortal Kombat and Injustice 2',
    url: 'https://www.youtube.com/watch?v=7jb0FOcImdg',
  },
  {
    label: 'The Fighting Game Glossary by Infil',
    url: 'https://glossary.infil.net/',
  },
  {
    label: 'Fightin Words: Netcode by Infil',
    url: 'https://words.infil.net/w02-netcode.html',
  },
  {
    label: 'Netcode Architectures Part 2: Rollback by Jay Mattis',
    url: 'https://www.snapnet.dev/blog/netcode-architectures-part-2-rollback/',
  },
];
