import { ProjectInfo, TalkData } from "@/types";

export const projects: ProjectInfo[] = [{
  img: `/assets/newtagfighter_2.jpg`,
  title: `Untitled Tag Fighting Game`,
  description: `3v3 tag team fighting game`,
  dateClosedAlpha: `2024`,
  dateEarlyAccess: `2025`,
  // todo include private playtest link?
  // https://playtest.mpaul.games
}, {
  img: `https://about.toughlovearena.com/asset/gallery/720p/gameplay1.jpg`,
  title: `Tough Love Arena`,
  description: `Beginner friendly fighting game`,
  dateEarlyAccess: `2021`,
  dateRelease: `Late 2024`,
  links: [{
    label: 'play on web',
    url: `https://toughlovearena.com`,
  }, {
    label: 'buy on steam',
    url: 'https://store.steampowered.com/app/1807330/Tough_Love_Arena/',
  }, {
    label: 'learn more',
    url: `https://about.toughlovearena.com`,
  }],
}, {
  img: `/assets/snowman.png`,
  title: `Snowman Goes Home`,
  description: `Procedurally generated slide puzzles`,
  dateRelease: `2019`,
  links: [{
    label: 'play on web',
    url: `https://snowman.mpaulweeks.com/`,
  }],
}];

export const talkDatas: TalkData[] = [{
  date: new Date('2024-03-29 16:00 PDT'),
  title: 'How to Design a Fighting Game',
  event: 'Sakuracon',
  eventUrl: 'https://sakuracon.org/programming/panels/',
  resources: [],
}, {
  date: new Date('2023-04-15 18:30 EDT'),
  title: `Designing Fighting Games & How to Balance Post Launch`,
  event: 'Waffle Games',
  eventUrl: `https://www.egdcollective.org/wafflegames2023`,
  resources: [{
    label: 'Slideshow',
    url: `https://docs.google.com/presentation/d/e/2PACX-1vSTVezembBnwYagCbRLN-30U7gs6jBbN4MIHdQ3oUOyQ456m-Sfa_xroHAZQkZOR6gA3cbqmsGxZMj3/pub?start=false&loop=false&delayms=3000`,
  }],
}, {
  date: new Date('2022-08-05 14:00 PDT'),
  title: 'Tough Love Arena - Developer Panel',
  event: 'EVO',
  eventUrl: 'https://evo.gg',
  resources: [{
    label: 'YouTube',
    url: 'https://www.youtube.com/watch?v=AyYXqth8RZg',
  }],
}, {
  date: new Date('2022-08-05 16:00 PDT'),
  title: 'State of the Indie FGC',
  event: 'EVO',
  eventUrl: 'https://evo.gg',
  resources: [{
    label: 'YouTube',
    url: 'https://www.youtube.com/watch?v=AyYXqth8RZg',
  }],
}];
