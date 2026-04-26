import Link from "next/link";
import { ArrowRight } from "lucide-react";

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Google Scholar", href: "https://googlescholar.com" },
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Instagram", href: "https://instagram.com" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Research", href: "/research" },

  { label: "Blog", href: "/contact" },
];

function Footer() {
  return (
    <footer className="w-full bg-[#f5f5f3] mt-20 min-h-[98vh] flex flex-col">
      <div className="w-[95%] px-2 md:px-10 mx-auto py-16 flex flex-col justify-between flex-1 gap-10">
        {/* Top row: Get in touch + socials */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10">
          <div className="items-center justify-start flex">
            <p className="font-semibold text-base text-black md:text-xl border-l-5 uppercase pl-3">
              get in touch
            </p>
          </div>
          <div className="flex items-center justify-between gap-8 md:gap-16">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black text-sm md:text-2xl hover:underline"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 mt-10 items-start flex-1">
          {/* Left: contact details */}
          <div className="flex flex-col gap-8 text-black text-sm md:text-2xl">
            <div className="flex flex-col gap-1">
              <p>+001 313 759 968 345</p>
              <p>hello@pharmaportfolio.com</p>
            </div>
            <div className="flex flex-col gap-1">
              <p>12273 Dream Avenue,</p>
              <p>Accra, Ghana</p>
            </div>
          </div>

          {/* Right: headline + buttons */}
          <div className="flex flex-col gap-10">
            <h2 className="text-7xl md:text-[10rem] font-bold text-black leading-none tracking-tighter">
              Let's Work <br /> Together
            </h2>
            <div className="flex items-center gap-2 md:gap-4">
              <Link
                href="/contact"
                className="flex items-center gap-2 bg-black text-white px-4 md:px-6 py-3 text-sm md:text-lg font-medium hover:bg-black/80 transition-colors"
              >
                Contact Now <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/001313759968345"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-black text-black px-4 md:px-6 py-3 text-sm md:text-lg font-medium hover:bg-black hover:text-white transition-colors"
              >
                Schedule a call <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-black/10 pt-8 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 text-black">
          <p className="text-sm md:text-2xl md:order-1 order-2">
            Designed by Softmindlabs
          </p>
          <div className="md:order-2 order-1 flex items-start md:items-center md:flex-row flex-col md:justify-between gap-5 md:gap-16">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-black text-sm md:text-2xl hover:underline"
              >
                {link.label}
              </Link>
            ))}
            <p className="text-sm md:text-2xl">©Paul.D. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
