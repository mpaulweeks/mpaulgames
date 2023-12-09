import { Hero } from "@/components/hero";
import { ProjectInfo } from "@/types";

const projects: ProjectInfo[] = [{
  title: `New Tag Fighter`,
  description: `Tag-team fighting game (more info coming soon)`,
  dates: `2023 - present`,
}, {
  url: `https://about.toughlovearena.com`,
  img: `https://about.toughlovearena.com/asset/gallery/720p/gameplay1.jpg`,
  title: `Tough Love Arena`,
  description: `Beginner friendly fighting game with simple controls`,
  dates: `2019 - present`,
}, {
  url: `https://snowman.mpaulweeks.com/`,
  img: `/assets/snowman.png`,
  title: `Snowman Goes Home`,
  description: `Procedurally generated slide puzzles`,
  dates: `2019`,
}];

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center text-center">
      {projects.map(p => <Hero {...p} key={p.title} /> )}
    </main>
  )
}
