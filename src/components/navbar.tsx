import Link from 'next/link';
import { CompanyLogo } from './data';

function DesktopNav() {
  return (
    <nav className="flex flex-row justify-center items-center p-4 text-lg gap-4 font-bold">
      <img className="inline-block h-10" src={CompanyLogo} alt="lemon logo" />
      <div className="flex-1">
        <Link href="/">M. Paul Games</Link>
      </div>
      <Link href="/talks" className="mr-4">
        Talks
      </Link>
      <Link href="/contact" className="mr-4">
        Contact
      </Link>
    </nav>
  );
}

function MobileNav() {
  return (
    <nav className="flex flex-col justify-center items-center p-4 gap-2 font-bold">
      <div className="text-2xl">M. Paul Games</div>
      <div className="flex flex-row justify-center items-center gap-2">
        <Link href="/">Projects</Link>
        {'•'}
        <Link href="/talks">Talks</Link>
        {'•'}
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
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
  );
}
