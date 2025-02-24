"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../app/context/themeContext";

const NavBar = () => {
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="w-full p-4 bg-gray-900 shadow-lg border-b border-gray-700 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-xl">
            <Link href="/">
              <span className="text-blue-400 font-bold uppercase">Web Scraper</span>
            </Link>
          </h1>
          <div className="flex items-center space-x-6">
            <Link href="/">
              <span
                className={`hover:text-blue-400 text-sm font-bold px-3 transition duration-200 uppercase ${
                  router.pathname === "/" ? "text-blue-400" : "text-gray-400"
                }`}
              >
                Home
              </span>
            </Link>
            <Link href="/about">
              <span
                className={`hover:text-blue-400 text-sm font-bold px-3 transition duration-200 uppercase ${
                  router.pathname === "/about" ? "text-blue-400" : "text-gray-400"
                }`}
              >
                About Us
              </span>
            </Link>
            <button
              onClick={toggleTheme}
              className="text-gray-400 hover:text-blue-400 transition duration-200"
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
