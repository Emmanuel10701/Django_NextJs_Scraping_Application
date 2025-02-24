"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../app/context/themeContext";

const NavBar = () => {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav
      className={`w-full p-4 shadow-lg border-b fixed top-0 left-0 right-0 z-50 transition-all duration-300 
      ${theme === "dark" ? "bg-gray-900 text-white border-gray-700" : "bg-white text-gray-900 border-gray-300"}`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-xl">
            <Link href="/">
              <span className="font-bold uppercase">Web Scraper</span>
            </Link>
          </h1>
          <div className="flex items-center space-x-6">
            <Link href="/">
              <span
                className={`hover:text-blue-400 text-sm font-bold px-3 transition duration-200 uppercase ${
                  pathname === "/" ? "text-blue-400" : ""
                }`}
              >
                Home
              </span>
            </Link>
            <Link href="/about">
              <span
                className={`hover:text-blue-400 text-sm font-bold px-3 transition duration-200 uppercase ${
                  pathname === "/about" ? "text-blue-400" : ""
                }`}
              >
                About Us
              </span>
            </Link>
            <button
              onClick={toggleTheme}
              className="transition duration-200"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
