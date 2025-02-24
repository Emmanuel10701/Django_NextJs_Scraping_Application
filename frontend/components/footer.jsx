"use client";
import Link from "next/link";
import { FaGithub, FaBook, FaServer, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="p-10 border-t border-gray-700 bg-gray-900 text-center mt-10 shadow-lg text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Project Overview */}
        <div>
          <h3 className="text-xl font-bold text-blue-400">About This Project</h3>
          <p className="text-gray-400 mt-2">
            A web scraping system designed to extract meaningful data efficiently from various sources, providing valuable insights and structured outputs.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-bold text-blue-400">Resources</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <Link href="/docs" className="hover:text-blue-400 transition duration-200 flex items-center">
                <FaBook className="mr-2" /> Documentation
              </Link>
            </li>
            <li>
              <Link href="/api" className="hover:text-blue-400 transition duration-200 flex items-center">
                <FaServer className="mr-2" /> API Endpoints
              </Link>
            </li>
            <li>
              <Link href="https://github.com/xSerioUsx78/scraper" target="_blank" className="hover:text-blue-400 transition duration-200 flex items-center">
                <FaGithub className="mr-2" /> GitHub Repository
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Support */}
        <div>
          <h3 className="text-xl font-bold text-blue-400">Support & Contact</h3>
          <p className="text-gray-400 mt-2">Need help or have suggestions?</p>
          <a href="mailto:emmanuel@example.com" className="mt-2 inline-block hover:text-blue-400 transition duration-200 flex items-center justify-center md:justify-start">
            <FaEnvelope className="mr-2" /> Contact Support
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 border-t border-gray-700 pt-4">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Web Scraper Project. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
