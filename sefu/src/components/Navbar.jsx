import { useState, useEffect } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
       
        <a href="#" className="text-2xl font-normal text-gray-800">
          Sefu Africa
        </a>

        
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className={`w-6 h-6 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

       
        <div
          className={`absolute inset-0 bg-white md:bg-transparent md:static flex flex-col md:flex-row items-center justify-center md:space-x-8 md:translate-x-0 transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
        >
          <a
            href="#"
            className="text-gray-800 font-light py-2 px-4 hover:text-blue-500 transition"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-800 font-normal py-2 px-4 hover:text-blue-500 transition"
          >
            Destinations
          </a>
          <a
            href="#"
            className="text-gray-800 font-normal py-2 px-4 hover:text-blue-500 transition"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-800 font-normal py-2 px-4 hover:text-blue-500 transition"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
