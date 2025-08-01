// import { useEffect } from "react";

type MobileMenuProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: (menuOpen: boolean) => void;
};

const MobileMenu = (props: MobileMenuProps) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
        props.isMenuOpen
          ? "h-screen opacity-100 pointer-events-auto"
          : "h-0 opacity-0 pointer-events-none"
      }`}>
      <button
        onClick={() => props.setIsMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu">
        &times;
      </button>
      <a
        href="#home"
        onClick={() => props.setIsMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
          props.isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5"
        }`}>
        Home
      </a>
      <a
        href="#about"
        onClick={() => props.setIsMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
          props.isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5"
        }`}>
        About
      </a>
      <a
        href="#projects"
        onClick={() => props.setIsMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
          props.isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5"
        }`}>
        Projects
      </a>
      <a
        href="#contact"
        onClick={() => props.setIsMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
          props.isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5"
        }`}>
        Contact
      </a>
    </div>
  );
};

export default MobileMenu;
