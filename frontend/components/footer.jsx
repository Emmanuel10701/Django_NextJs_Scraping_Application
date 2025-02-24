"use client";
import Link from "next/link";
import { FaGithub, FaBook, FaServer, FaEnvelope } from "react-icons/fa";
import { useTheme } from "../app/context/themeContext";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer
      className={`p-10 border-t shadow-lg text-center mt-10 ${
        theme === "dark"
          ? "bg-gray-900 text-white border-gray-700"
          : "bg-white text-gray-900 border-gray-300"
      }`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Project Overview */}
        <div>
          <h3
            className={`text-xl font-bold ${
              theme === "dark" ? "text-blue-400" : "text-blue-600"
            }`}
          >
            About This Project
          </h3>
          <p
            className={`mt-2 ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            A web scraping system designed to extract meaningful data efficiently from various sources, providing valuable insights and structured outputs.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3
            className={`text-xl font-bold ${
              theme === "dark" ? "text-blue-400" : "text-blue-600"
            }`}
          >
            Resources
          </h3>
          <ul className="mt-2 space-y-2">
            <li>
              <Link
                href="/docs"
                className={`hover:text-blue-400 transition duration-200 flex items-center ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <FaBook className="mr-2" /> Documentation
              </Link>
            </li>
            <li>
              <Link
                href="/api"
                className={`hover:text-blue-400 transition duration-200 flex items-center ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <FaServer className="mr-2" /> API Endpoints
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/Emmanuel10701/Django_NextJs_Scraping_Application"
                target="_blank"
                className={`hover:text-blue-400 transition duration-200 flex items-center ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <FaGithub className="mr-2" /> GitHub Repository
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Support */}
        <div>
          <h3
            className={`text-xl font-bold ${
              theme === "dark" ? "text-blue-400" : "text-blue-600"
            }`}
          >
            Support & Contact
          </h3>
          <p
            className={`mt-2 ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Need help or have suggestions?
          </p>
          <a
            href="mailto:emmanuel@example.com"
            className={`mt-2 hover:text-blue-400 transition duration-200 flex items-center justify-center md:justify-start ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            <FaEnvelope className="mr-2" /> Contact Support
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 border-t pt-4">
        <p
          className={`text-sm ${
            theme === "dark" ? "text-gray-400 border-gray-700" : "text-gray-600 border-gray-300"
          }`}
        >
          © {new Date().getFullYear()} Web Scraper Project. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
