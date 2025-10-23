/* Sticky navbar. logo and brand name on the left, links to pages on the middle, contact button on the right. */
import { useState } from "react";
import logo from "/Users/ishankhurram/miltongeeks/src/assets/milton-geeks-logo.svg";

/* Set nav links as constants. Loop through them for links*/
const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#benefits", label: "Benefits" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
];

/* initialize navbar function */
export default function Navbar() {
  return (
    <header
      className="sticky top-0 z-50 bg-[#ffffff] backdrop-blur border-b"
      role=""
    >
      <nav className="mx-auto grid h-24 w-full grid-cols-[auto_1fr_auto] items-center px-20">
        {/* Left */}
        <a href="/" className="font-poppins flex items-center gap-2 shrink-0">
          <img src={logo} alt="Milton Geeks Logo" className="w-12 h-12 block" />
          <span className="font-poppins font-semibold leading-none whitespace-nowrap text-[#1F76D2] text-xl">
            Milton<span className="text-[#000000]">Geeks</span>
          </span>
        </a>

        {/* Middle links, DESKTOP VERSION 
            Loop through constants made earlier to display links.
        */}
        <ul className="justify-self-center hidden md:flex items-center gap-8 text-med text-neutral-700 leading-none font-bevietnam font-bold translate-x-[-2rem]">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-black transition">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right contact button DESKTOP */}
        <div className="hidden md:block justify-self-end">
          <button
            href="#contact"
            className="rounded-full bg-[#fffff] text-[#1F76D2] px-4 py-2 hover:bg-[#F8F8F8] transition outline-1"
          >
            Contact
          </button>
        </div>
      </nav>
    </header>
  );
}
