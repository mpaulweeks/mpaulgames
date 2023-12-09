import Link from "next/link";

export function DesktopNav() {
  return (
    <main className="flex-row justify-center items-center bg-black text-white p-4 text-lg gap-4 font-bold hidden md:flex">
      <img
        className="inline-block h-10"
        src="/lemon64x64.png"
      />
      <div className="flex-1">
        <Link href="/">
          M. Paul Games
        </Link>
      </div>
      <Link href="/about">
        About
      </Link>
    </main>
  )
}

export function NavBar() {
  return (
    <>
      <nav className="fixed w-full top-0 z-10">
        <DesktopNav />
      </nav>
      <nav className="block">
        <DesktopNav />
      </nav>
    </>
  )
}
