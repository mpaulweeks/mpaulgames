import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center text-center">
      <Hero
        title="New Tag Fighter"
        description="Unannounced tag-team fighting game"
        dates="2023 - present"
      />
      <Hero
        url="https://about.toughlovearena.com"
        img="https://about.toughlovearena.com/asset/gallery/720p/gameplay1.jpg"
        title="Tough Love Arena"
        description="Browser-based beginner fighting game"
        dates="2019 - present"
      />
    </main>
  )
}
