import Link from "next/link";
import { ArrowRight } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full bg-[#f5f5f3] mt-20 min-h-[98vh] flex flex-col">
      <div className="w-[95%] px-2 md:px-10 mx-auto py-16 flex flex-col justify-between flex-1 gap-10">
        {/* Top row: Get in touch + socials on same horizontal line */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10">
          <div className="items-center justify-start flex ">
            <p className="font-semibold text-base md:text-xl border-l-5 uppercase pl-3">
              get in touch
            </p>
          </div>
          <div className="flex items-center justify-between gap-8 md:gap-16 ">
            {["Instagram", "X (Twitter)", "LinkedIn", "Dribbble"].map((s) => (
              <a
                key={s}
                href="#"
                className="text-black text-sm md:text-2xl hover:underline"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 mt-10 items-start flex-1">
          {/* Left: contact details — number aligned horizontally with headline */}
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
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="flex items-center gap-2 bg-black text-white px-6 py-3 text-sm md:text-lg font-medium hover:bg-black/80 transition-colors"
              >
                Contact Now <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/001313759968345"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-black text-black px-6 py-3 text-sm md:text-lg font-medium hover:bg-black hover:text-white transition-colors"
              >
                Schedule a call <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar — same grid so nav aligns under headline */}
        <div className="border-t border-black/10 pt-8 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 text-black">
          <p className="text-sm md:text-2xl">Designed by Softmindlabs</p>
          <div className="flex items-center justify-between gap-8 md:gap-16">
            {["Home", "Projects", "Services", "About us", "Blog"].map(
              (link) => (
                <Link
                  key={link}
                  href={`/${link.toLowerCase().replace(" ", "-")}`}
                  className="text-black text-sm md:text-2xl hover:underline"
                >
                  {link}
                </Link>
              ),
            )}
            <p className="text-sm md:text-2xl">©Paul.D. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
