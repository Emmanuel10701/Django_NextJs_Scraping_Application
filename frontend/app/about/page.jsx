"use client";
import { FaPen, FaTrashAlt, FaPlusCircle, FaClipboardList } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();

  return (
    <>
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl font-extrabold mt-[10%] text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 sm:text-4xl mb-4">
              About Our Web Scraping Platform
            </h1>
            <p className="mt-4 text-base text-gray-700">
              This application is designed to simplify web scraping by providing a user-friendly interface to extract, process, and manage data from websites.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center mb-12"
          >
            <p className="text-base text-gray-700">
              The following features are tailored to assist with all your web scraping needs. Whether you're extracting data, automating tasks, cleaning results, or managing your scraped data, our platform streamlines the process.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white shadow-xl rounded-lg p-6 hover:bg-blue-50 transition-all"
            >
              <div className="flex items-center mb-4">
                <FaPlusCircle className="text-blue-600 text-2xl mr-4" />
                <h2 className="text-xl font-bold text-gray-900">
                  Scrape <span className="bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text">Data</span>
                </h2>
              </div>
              <p className="text-base text-gray-700">
                Easily extract data from target websites by providing a URL, and let our scraper handle the heavy lifting.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white shadow-xl rounded-lg p-6 hover:bg-blue-50 transition-all"
            >
              <div className="flex items-center mb-4">
                <FaPen className="text-yellow-600 text-2xl mr-4" />
                <h2 className="text-xl font-bold text-gray-900">
                  Automate <span className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-transparent bg-clip-text">Extraction</span>
                </h2>
              </div>
              <p className="text-base text-gray-700">
                Schedule and automate your scraping tasks to run at regular intervals, ensuring your data is always fresh.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white shadow-xl rounded-lg p-6 hover:bg-blue-50 transition-all"
            >
              <div className="flex items-center mb-4">
                <FaTrashAlt className="text-red-600 text-2xl mr-4" />
                <h2 className="text-xl font-bold text-gray-900">
                  Clean &amp; Transform <span className="bg-gradient-to-r from-red-500 to-red-700 text-transparent bg-clip-text">Data</span>
                </h2>
              </div>
              <p className="text-base text-gray-700">
                Refine your scraped data by filtering out irrelevant information and transforming it into a structured, usable format.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white shadow-xl rounded-lg p-6 hover:bg-blue-50 transition-all"
            >
              <div className="flex items-center mb-4">
                <FaClipboardList className="text-green-600 text-2xl mr-4" />
                <h2 className="text-xl font-bold text-gray-900">
                  Manage <span className="bg-gradient-to-r from-green-500 to-green-700 text-transparent bg-clip-text">Data</span>
                </h2>
              </div>
              <p className="text-base text-gray-700">
                Organize and store your scraped data efficiently, making it simple to access, analyze, and extract valuable insights.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="mt-16 text-center"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              More About Our Platform
            </h2>
            <p className="text-base text-gray-700 mb-4">
              Our web scraping platform is built to empower businesses and individuals with the tools they need to gather data effortlessly from the web. By automating data extraction, you can save time, reduce manual errors, and focus on leveraging the data to drive insights.
            </p>
            <p className="text-base text-gray-700">
              Whether you're looking to monitor market trends, aggregate information from multiple sources, or build data-driven applications, our platform offers scalable solutions tailored to your needs. We continuously update our features to support the latest technologies and best practices in web scraping.
            </p>
          </motion.div>

          <button
            onClick={() => router.push('/')}
            className="px-6 py-2 bg-transparent border border-gray-500 mt-10 text-gray-800 rounded-full shadow hover:bg-gray-500 hover:text-white transition-all"
          >
            Go Back
          </button>
        </div>
      </div>
    </>
  );
};

export default About;
