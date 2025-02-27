"use client"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios'; // Import Axios
import { FaEye } from 'react-icons/fa'; // React Icons
import { motion } from 'framer-motion'; // Framer Motion
import CircularProgress from '@mui/material/CircularProgress'; // Material UI CircularProgress

const WebScraper = () => {
  const [scrapedData, setScrapedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 10;

  const API_URL = "http://127.0.0.1:8000/scraper/api/data/" // Your API URL for scraping service or server

  useEffect(() => {
    // Fetch scraped data using Axios from your scraping API or server
    setIsLoading(true);
    axios
      .get(API_URL)
      .then((response) => {
        setScrapedData(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        alert('Error fetching data');
        setIsLoading(false);
      });
  }, []);

  // Logic for pagination
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = scrapedData.slice(indexOfFirstData, indexOfLastData);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handlePrevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));
  const handleNextPage = () => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(scrapedData.length / dataPerPage)));

  return (
    <>
      {/* Success Alert */}
      {showSuccessAlert && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-md">
          Data fetched successfully!
        </div>
      )}

      <div className="my-12 sm:my-16 md:my-20 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Web Scraping Results
        </h2>
      </div>

      {/* Display Scraped Data */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {currentData.map((dataItem, index) => (
          <motion.div
            key={index}
            className="bg-slate-100 shadow-xl rounded-lg p-6 border border-gray-300 max-w-sm mx-auto"
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.1 }}
          >
            <h2 className="text-xl font-bold text-slate-600 mb-4">{dataItem.title}</h2>
            <p className="text-slate-800 mb-4">
              {dataItem.content ? dataItem.content.slice(0, 150) : 'No content available...'}...
            </p>
            <div className="flex justify-between items-center">
              <motion.button
                onClick={() => alert(`Viewing more details for ${dataItem.title}`)}
                className="px-4 py-2 bg-transparent border border-blue-500 rounded-md shadow-sm hover:shadow-md transition-all"
              >
                View <FaEye className="inline-block ml-2" />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        {/* Previous Button */}
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 mx-1 border border-gray-300 rounded-full hover:bg-gray-200 ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-black'}`}
        >
          {'<<'}
        </button>

        {/* Page Number Buttons */}
        {Array.from({ length: Math.ceil(scrapedData.length / dataPerPage) }).map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`px-4 py-2 mx-1 border border-gray-300 rounded-full hover:bg-gray-200 ${
              currentPage === index + 1 ? 'bg-blue-500 text-white' : 'text-black'
            }`}
          >
            {index + 1}
          </button>
        ))}

        {/* Next Button */}
        <button
          onClick={handleNextPage}
          disabled={currentPage === Math.ceil(scrapedData.length / dataPerPage)}
          className={`px-4 py-2 mx-1 border border-gray-300 rounded-full hover:bg-gray-200 ${currentPage === Math.ceil(scrapedData.length / dataPerPage) ? 'text-gray-400 cursor-not-allowed' : 'text-black'}`}
        >
          {'>>'}
        </button>
      </div>

      {/* Display Loading Indicator */}
      {isLoading && (
        <div className="fixed top-4 right-4 bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md flex items-center space-x-2">
          <CircularProgress color="inherit" />
          <span>Loading data...</span>
        </div>
      )}
    </>
  );
};

export default WebScraper;
