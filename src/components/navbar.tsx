import Link from "next/link";

export function NavBar() {
  return (
    <main className="flex flex-row justify-center items-center bg-black text-white p-4 text-lg gap-4 font-bold">
      <img
        className="inline-block h-10"
        src="/lemon64x64.png"
      />
      <Link href="/" className="flex-1">
        M. Paul Games
      </Link>
      <Link href="/about">
        About
      </Link>
    </main>
  )
}
