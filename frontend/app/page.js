"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useSession, signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaDatabase, FaSpider, FaCode, FaSearch } from "react-icons/fa";
import DataDisplay from "../components/hero";
import { useTheme } from "../app/context/themeContext"; // Import useTheme hook

const features = [
  {
    title: "Extract Data Easily",
    description: "Scrape data from various websites with ease using powerful tools.",
    icon: <FaSpider className="text-blue-500 text-4xl" />,
  },
  {
    title: "Automate Scraping",
    description: "Schedule and automate web scraping tasks effortlessly.",
    icon: <FaCode className="text-blue-500 text-4xl" />,
  },
  {
    title: "Store & Manage Data",
    description: "Save scraped data into structured formats like JSON, CSV, or databases.",
    icon: <FaDatabase className="text-blue-500 text-4xl" />,
  },
  {
    title: "Search & Analyze",
    description: "Perform real-time analysis on scraped data to extract insights.",
    icon: <FaSearch className="text-blue-500 text-4xl" />,
  },
];

export default function Home({ data }) {
  const [showModal, setShowModal] = useState(false);
  const { theme, toggleTheme } = useTheme(); // Access theme from context

  return (
    <div
      className={`font-poppins transition-all duration-300 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <header
        className={`relative text-center py-16 transition-all duration-300 ${
          theme === "dark" ? "bg-gray-800" : "bg-blue-50"
        }`}
      >
        <div className="flex flex-col-reverse md:flex-row items-center mx-4 md:mx-40 mt-10">
          <div className="md:w-1/2">
            <motion.h1
              className={`mb-4 text-5xl font-bold transition-all duration-300 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              Master <span className="text-blue-600">Web Scraping</span>
            </motion.h1>
            <motion.p
              className={`mb-8 max-w-xl mx-auto leading-relaxed transition-all duration-300 ${
                theme === "dark" ? "text-gray-400" : "text-gray-500"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              Learn how to scrape, store, and analyze web data with our easy-to-use tools and techniques.
            </motion.p>
            <motion.div
              className="flex justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, scale: [1, 1.05, 1] }}
              transition={{ duration: 0.8 }}
            >
              <button
                onClick={() => setShowModal(true)}
                className="px-8 py-3 font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition duration-300"
              >
                Get Started
              </button>
              <a href="#features">
                <button className="px-8 py-3 font-medium text-blue-600 border-2 border-blue-600 rounded-full hover:bg-blue-100 transition duration-300">
                  Learn More
                </button>
              </a>
            </motion.div>
          </div>
          <div className="md:w-1/2">
            <Image src="/lady.png" alt="Web Scraping" width={500} height={500} />
          </div>
        </div>
      </header>

      <section
        id="features"
        className={`py-16 px-4 mx-4 md:px-12 transition-all duration-300 ${
          theme === "dark" ? "bg-gray-800" : "bg-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2
            className={`text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-500 transition-all duration-300 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Why Choose <span className="text-green-600">Our Scraper</span>?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-6 bg-white shadow-md rounded-lg transition-transform duration-500 transform hover:scale-105 flex flex-col items-center ${
                  theme === "dark" ? "bg-gray-700" : "bg-white"
                }`}
              >
                <span className="flex items-center justify-center mb-4 p-4 rounded-full text-white">
                  {feature.icon}
                </span>
                <h4
                  className={`mb-2 text-lg font-bold transition-all duration-300 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {feature.title}
                </h4>
                <p
                  className={`text-gray-500 transition-all duration-300 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DataDisplay data={data} />

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full relative">
            <button className="absolute top-3 right-3 text-gray-600" onClick={() => setShowModal(false)}>
              ✖
            </button>
            <h1
              className={`text-3xl font-bold text-center mb-6 transition-all duration-300 ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              Start Scraping Today!
            </h1>
            <p
              className={`text-center mb-8 transition-all duration-300 ${
                theme === "dark" ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Sign in to access powerful scraping tools.
            </p>
            <button
              onClick={() => signIn("google")}
              className="flex items-center justify-center w-full py-3 bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100 transition"
            >
              <FcGoogle className="text-2xl mr-3" />
              <span className="text-gray-700 font-medium">Sign in with Google</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
