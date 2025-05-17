import { useEffect } from "react";

type NavbarProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: (menuOpen: boolean) => void;
};

const Navbar = (props: NavbarProps) => {
  useEffect(() => {
    document.body.style.overflow = props.isMenuOpen ? "hidden" : "";
  }, [props.isMenuOpen]);

  return (
    <nav className="fixed tep-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            Ben <span className="text-blue-500">Stoica</span>
          </a>

          <button
            className="w-7 h-5 relative z-40 md:hidden"
            onClick={() => props.setIsMenuOpen(!props.isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={props.isMenuOpen}>
            &#9776;
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors">
              {" "}
              Home{" "}
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors">
              {" "}
              About{" "}
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors">
              {" "}
              Projects{" "}
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors">
              {" "}
              Contact{" "}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
