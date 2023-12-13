import { ProjectInfo } from "@/types";

export const projects: ProjectInfo[] = [{
  img: `/assets/newtagfighter.jpg`,
  title: `New Tag Fighter`,
  description: `3v3 tag team fighting game`,
  dateClosedAlpha: `Coming 2024`,
}, {
  img: `https://about.toughlovearena.com/asset/gallery/720p/gameplay1.jpg`,
  title: `Tough Love Arena`,
  description: `Beginner friendly fighting game`,
  dateOpenBeta: `2021`,
  dateRelease: `Coming 2024`,
  links: [{
    label: 'play now',
    url: `https://toughlovearena.com`,
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
    label: 'play now',
    url: `https://snowman.mpaulweeks.com/`,
  }],
}];
