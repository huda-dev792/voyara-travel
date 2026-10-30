import { useState } from "react";
import { ArrowRight, Compass, Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="relative flex items-center justify-around px-6 md:px-8 py-5 md:py-6">
      {/* Logo */}
      <a
        href="/voyara-travel/"
        className="flex items-center gap-2 text-3xl font-bold text-gold"
      >
        <Compass size={32} />
        Voyara<span>.</span>
      </a>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-16 text-white">
        <a href="/voyara-travel/" className="hover:text-gold hover:underline">
          Home
        </a>
        <a href="/voyara-travel/#about" className="hover:text-gold hover:underline">About
        </a>
        <a href="/voyara-travel/#contact" className="hover:text-gold hover:underline">
          Contact Us
        </a>
      </div>

      {/* Desktop Button */}
      <a
        href="/voyara-travel/#destinations"
        className="hidden md:inline-flex rounded-full border border-gold text-gold px-5 py-3 hover:bg-gold hover:text-black transition"
      >
        Explore Tour <ArrowRight className="inline ml-2" size={18} />
      </a>

      {/* Mobile Menu Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-gold"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full z-50 flex flex-col gap-5 border-t border-white/10 bg-[#10251F] px-6 py-6 text-white shadow-xl md:hidden">
          <a href="/voyara-travel/" onClick={closeMenu} className="hover:text-gold">
            Home
          </a>
          <a href="/voyara-travel/#about" onClick={closeMenu} className="hover:text-gold">
            About
          </a>
          <a href="/voyara-travel/#contact" onClick={closeMenu} className="hover:text-gold">
            Contact Us
          </a>
          <a
            href="/voyara-travel/#destinations"
            onClick={closeMenu}
            className="hover:text-gold"
          >
            Destinations
          </a>
          <a
            href="/voyara-travel/#destinations"
            onClick={closeMenu}
            className="inline-flex items-center justify-center rounded-full border border-gold px-5 py-3 text-gold"
          >
            Explore Tour <ArrowRight className="ml-2" size={18} />
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;