import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {

  const router = useRouter();
  const currentUrl = router.asPath;

  return (
    <nav className="shadow-sm py-4 bg-transparent">
      <div className="container flex items-center justify-between gap-4">
        <button className="inline-flex md:hidden">
          <span className="bi bi-list nav-link"></span>
        </button>
        <Link href="/">
          <span className="font-bold text-main italic text-2xl">Sphene Qwizines</span>
        </Link>
        <ul className="hidden md:flex gap-8 capitalize">
          <li>
            <Link href="/" className={`nav-link ${currentUrl === "/" ? "active" : ""}`}>Home</Link>
          </li>
          <li>
            <Link href="/" className={`nav-link ${currentUrl === "/menu" ? "active" : ""}`}>Menu</Link>
          </li>
          <li>
            <Link href="/about" className={`nav-link ${currentUrl === "/about" ? "active" : ""}`}>About</Link>
          </li>
          <li>
            <Link href="/" className={`nav-link ${currentUrl === "/contact" ? "active" : ""}`}>Contact</Link>
          </li>
        </ul>
        <ul className="flex gap-4 sm:gap-6 md:gap-8">
          <li>
            <span className="bi bi-search nav-link cursor-pointer"></span>
          </li>
          <li>
            <Link href="/" className="nav-link">
              <span className="bi bi-cart"></span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
