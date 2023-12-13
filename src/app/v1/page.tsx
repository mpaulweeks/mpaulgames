import { projects } from "@/components/data";
import { Hero } from "@/components/hero";

export function HomeV1() {
  return (
    <main className="flex flex-col justify-center items-center text-center">
      {projects.map(p => <Hero {...p} key={p.title} /> )}
    </main>
  )
}

export default HomeV1;
