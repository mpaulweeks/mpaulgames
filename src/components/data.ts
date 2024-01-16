import { ProjectInfo } from "@/types";

export const projects: ProjectInfo[] = [{
  img: `/assets/newtagfighter_2.jpg`,
  title: `New Tag Fighter`,
  description: `3v3 tag team fighting game`,
  dateClosedAlpha: `Spring 2024`,
  // todo include private playtest link?
  // https://playtest.mpaul.games
}, {
  img: `https://about.toughlovearena.com/asset/gallery/720p/gameplay1.jpg`,
  title: `Tough Love Arena`,
  description: `Beginner friendly fighting game`,
  dateEarlyAccess: `2021`,
  dateRelease: `Summer 2024`,
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
