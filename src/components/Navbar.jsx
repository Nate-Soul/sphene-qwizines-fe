import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter();
  const currentUrl = router.asPath;

  const toggleOpenMenu = () => {
    setOpenMenu(!openMenu);
  }

  return (
    <nav className="shadow-sm py-4 bg-transparent relative">
      <div className="container flex items-center justify-between gap-4">
        <button className="inline-flex font-semibold md:hidden" onClick={toggleOpenMenu}>
          <span className={`bi bi-list nav-link ${openMenu ? "hidden": ""}`}></span>
          <span className={`bi bi-x-lg nav-link ${openMenu ? "": "hidden"}`}></span>
        </button>
        {openMenu && (
          <div className="mobile-menu absolute transition-opacity block md:hidden top-16 left-0 w-full bg-main-100 bg-opacity-95 text-center overflow-y-auto">
            <ul className="flex flex-col justify-center gap-5 capitalize font-semibold text-white pt-16">
              <li>
                <Link href="/" className={`block py-2 hover:text-light ${currentUrl === "/" ? "text-light" : ""}`}>Home</Link>
              </li>
              <li>
                <Link href="/about" className={`block py-2 hover:text-light ${currentUrl === "/about" ? "text-light" : ""}`}>About Us</Link>
              </li>
              <li>
                <Link href="/" className={`block py-2 hover:text-light ${currentUrl === "/menu" ? "text-light" : ""}`}>Menu</Link>
              </li>
              <li>
                <Link href="/" className={`block py-2 hover:text-light ${currentUrl === "/contact" ? "text-light" : ""}`}>Contact Us</Link>
              </li>
            </ul>
          </div>)
        }
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
            <Link href="/contact" className={`nav-link ${currentUrl === "/contact" ? "active" : ""}`}>Contact</Link>
          </li>
        </ul>
        <ul className="flex gap-4 sm:gap-6 md:gap-8">
          <li>
            <span className="bi bi-search nav-link cursor-pointer"></span>
          </li>
          <li>
            <Link href="/" className="nav-link">
              <span className="bi bi-basket"></span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
