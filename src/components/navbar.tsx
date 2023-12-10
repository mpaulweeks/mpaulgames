import Link from "next/link";

function DesktopNav() {
  return (
    <nav className="flex flex-row justify-center items-center p-4 text-lg gap-4 font-bold">
      <img
        className="inline-block h-10"
        src="/lemon64x64.png"
      />
      <div className="flex-1">
        <Link href="/">
          M. Paul Games
        </Link>
      </div>
      <Link href="/about" className="mr-4">
        About
      </Link>
    </nav>
  )
}

function MobileNav() {
  return (
    <nav className="flex flex-col justify-center items-center p-4 gap-2 font-bold">
      <div className="text-2xl">
        M. Paul Games
      </div>
      <div className="flex flex-row justify-center items-center gap-2">
        <img
          className="inline-block h-6"
          src="/lemon64x64.png"
        />
        <Link href="/">
          Projects
        </Link>
        <img
          className="inline-block h-6"
          src="/lemon64x64.png"
        />
        <Link href="/about">
          About
        </Link>
        <img
          className="inline-block h-6"
          src="/lemon64x64.png"
        />
      </div>
    </nav>
  )
}

export function NavBar() {
  return (
    <section>
      <div className="hidden md:block fixed w-full top-0 z-10">
        <DesktopNav />
      </div>
      {/* render 2nd invisible one to take up space */}
      <div className="hidden md:block invisible">
        <DesktopNav />
      </div>
      <div className="block md:hidden">
        <MobileNav />
      </div>
    </section>
  )
}
