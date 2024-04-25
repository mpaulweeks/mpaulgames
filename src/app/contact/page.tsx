import { Logo } from "@/components/logo";

const email = "hello@mpaul.games";

export default function About() {
  return (
    <main className="flex flex-col justify-center items-center text-center gap-4 p-8">
      <Logo src="/paul.png" />
      <p className="text-xl">
        M. Paul Games LLC develops accessible games for the browser.
      </p>
      <p>
        You can contact us by sending an email to
        {' '}
        <a href={`mailto:${email}`} className="text-blue-300">
          {email}
        </a>
      </p>
    </main>
  )
}
