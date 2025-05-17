import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navLinks = [
    { path: "/", label: "HOME" },
    { path: "/work", label: "WORK" },
    { path: "/about", label: "ABOUT" },
    { path: "/contact", label: "CONTACT" },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "py-4 bg-black/50" : "py-6 bg-transparent"
      } backdrop-blur-sm`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <button
          onClick={() => handleNavigation("/")}
          className="text-xl tracking-widest font-light"
        >
          NCKCODE
        </button>

        {/* Desktop Navigation - fully right aligned */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.path}
              onClick={() => handleNavigation(link.path)}
              className={`text-sm tracking-widest font-light hover:opacity-60 transition-opacity ${
                window.location.pathname === link.path
                  ? "opacity-100"
                  : "opacity-80"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5 z-[100]"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-px bg-white transition-transform ${
              menuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`w-6 h-px bg-white transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-px bg-white transition-transform ${
              menuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Navigation - Shifted down */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-black z-[90] flex flex-col items-center">
          <div className="flex flex-col items-center space-y-12 pt-32">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNavigation(link.path)}
                className={`text-2xl tracking-widest font-light hover:opacity-60 transition-opacity ${
                  window.location.pathname === link.path
                    ? "opacity-100"
                    : "opacity-80"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
