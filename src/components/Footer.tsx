import logo from "../assets/milton-geeks-logo.svg";
import ContactModal from "./ContactModal";

export default function Footer() {
  return (
    <footer>
      <nav className="mx-auto grid h-24 w-full grid-cols-[auto_1fr_auto] items-center px-20">
        {/* Left — Logo */}
        <a href="/" className="font-poppins flex items-center gap-2 shrink-0">
          <img src={logo} alt="Milton Geeks Logo" className="w-12 h-12 block" />
          <span className="font-poppins font-semibold leading-none whitespace-nowrap text-[#1F76D2] text-xl">
            Milton<span className="text-[#000000]">Geeks</span>
          </span>
        </a>

        {/* Middle — Info text */}
        <div className="justify-self-center text-slate-600 font-medium text-sm">
          © Milton Geeks | All rights reserved | 2025
        </div>

        {/* Right — Contact button */}
        <div className="hidden md:block justify-self-end">
          <ContactModal />
        </div>
      </nav>
    </footer>
  );
}
