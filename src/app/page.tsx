import { Hero } from "@/components/hero";
import { ProjectInfo } from "@/types";

const projects: ProjectInfo[] = [{
  img: `/assets/newtagfighter.jpg`,
  title: `New Tag Fighter`,
  description: `3v3 tag team fighting game`,
  dateClosedAlpha: `Coming 2024`,
}, {
  url: `https://about.toughlovearena.com`,
  img: `https://about.toughlovearena.com/asset/gallery/720p/gameplay1.jpg`,
  title: `Tough Love Arena`,
  description: `Beginner friendly fighting game`,
  dateOpenBeta: `2021`,
  dateRelease: `Coming 2024`,
}, {
  url: `https://snowman.mpaulweeks.com/`,
  img: `/assets/snowman.png`,
  title: `Snowman Goes Home`,
  description: `Procedurally generated slide puzzles`,
  dateRelease: `2019`,
}];

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center text-center">
      {projects.map(p => <Hero {...p} key={p.title} /> )}
    </main>
  )
}
