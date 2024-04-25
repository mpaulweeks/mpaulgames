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
  resources: [{
    label: 'Slideshow',
    url: 'https://docs.google.com/presentation/d/e/2PACX-1vSkdHnpOlyBnsKVOvqkzTlXXmSbq5hCKsWOnY9wqV8b4ACgmWhsiZigW4Dsa4X0v-P9psei3mJ64RKS/pub?start=false&loop=false&delayms=3000',
  }],
  references: [{
    label: `Magic: the Gathering: 20 Years, 20 Lessons Learned`,
    url: 'https://www.youtube.com/watch?v=QHHg99hwQGY',
  }, {
    label: 'What is Rollback Netcode? by Muno',
    url: 'https://bymuno.com/post/rollback',
  }, {
//   label: 'Fightin Words: Netcode by Infil',
//   url: 'https://words.infil.net/w02-netcode.html',
// }, {
//   label: 'Netcode Architectures Part 2: Rollback by Jay Mattis',
//   url: 'https://www.snapnet.dev/blog/netcode-architectures-part-2-rollback/',
// }, {
    label: '8 Frames in 16ms: Rollback Networking in Mortal Kombat and Injustice 2',
    url: 'https://www.youtube.com/watch?v=7jb0FOcImdg',
  }, {
    label: 'The Fighting Game Glossary by Infil',
    url: 'https://glossary.infil.net/',
  }],
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
