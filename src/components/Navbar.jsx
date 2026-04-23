"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Research", href: "/research" },
  { label: "Publications", href: "/publications" },
  { label: "Contact", href: "/contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileScrolled, setMobileScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const timeout = setTimeout(() => setMenuOpen(false), 300);
    return () => clearTimeout(timeout);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 1.2);
      setMobileScrolled(window.scrollY > window.innerHeight * 0.5);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mobileColor = isHome
    ? mobileScrolled
      ? "text-black"
      : "text-white"
    : "text-black";

  const desktopColor = isHome
    ? scrolled
      ? "text-black"
      : "text-white"
    : "text-black";

  return (
    <>
      <header
        className={`fixed h-15 md:top-5 px-2 md:px-10 left-0 right-0 z-40 flex items-center justify-between w-full md:w-[95%] mx-auto transition-colors duration-500
          ${isHome ? (mobileScrolled ? "bg-white" : "bg-transparent") : "bg-white"}
          md:bg-transparent
        `}
      >
        <Link
          href="/"
          className={`font-bold text-2xl md:text-3xl tracking-tight transition-colors duration-500 ${mobileColor} md:${desktopColor}`}
        >
          Paul.D
        </Link>
        <button
          onClick={() => setMenuOpen(true)}
          className={`font-medium text-2xl tracking-tight cursor-pointer transition-colors duration-500 ${mobileColor} md:${desktopColor}`}
        >
          Menu
        </button>
      </header>

      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/30 transition-opacity duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      <div
        className={`fixed top-0 right-0 h-full z-50 bg-gray-100 flex flex-col transition-transform duration-500 ease-in-out
          w-full md:w-[35vw]
          ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col flex-1 px-5 md:px-10 gap-7 md:gap-8 py-3 md:py-5">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-3xl md:text-6xl tracking-tight font-medium text-black hover:text-black/40 hover:tracking-wider transition-all duration-300 leading-tight"
            >
              Home
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              className="w-14 h-14 rounded-full bg-gray-300 text-black flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
            >
              <X size={22} />
            </button>
          </div>

          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-3xl md:text-6xl font-medium tracking-tight text-black hover:text-black/40 hover:tracking-wider transition-all duration-300 leading-tight"
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="px-5 md:px-10 pb-5 md:pb-10 flex gap-5 md:gap-0 items-start md:justify-between md:flex-row flex-col text-black font-medium">
          <div className="space-y-1">
            <p className="text-base sm:text-lg md:text-xl">
              paul.donkor@ug.edu.gh
            </p>
            <p className="text-base sm:text-lg md:text-xl">+233 XX XXX XXXX</p>
          </div>
          <div className="md:text-right space-y-1">
            <p className="text-base sm:text-lg md:text-xl">
              University of Ghana
            </p>
            <p className="text-base sm:text-lg md:text-xl">Accra, Ghana</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
