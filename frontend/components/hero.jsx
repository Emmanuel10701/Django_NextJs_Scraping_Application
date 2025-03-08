"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaEye } from "react-icons/fa";
import { motion } from "framer-motion";
import CircularProgress from "@mui/material/CircularProgress";

const WebScraper = () => {
  const [scrapedData, setScrapedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewedData, setViewedData] = useState(null);
  const [isViewing, setIsViewing] = useState(false);

  const dataPerPage = 10;
  const API_URL = "http://127.0.0.1:8000/api/get-scraped-data/";

  // Fetch data on mount
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(API_URL)
      .then((response) => {
        setScrapedData(response.data);
        setIsLoading(false);
        setShowSuccessAlert(true);
        setTimeout(() => setShowSuccessAlert(false), 3000);
      })
      .catch((err) => {
        console.error("Error fetching data:", err.message);
        alert("Error fetching data.");
        setIsLoading(false);
      });
  }, []);

  // Pagination Logic
  const totalPages = Math.ceil(scrapedData.length / dataPerPage) || 1;
  const currentData = scrapedData.slice((currentPage - 1) * dataPerPage, currentPage * dataPerPage);

  // Fetch single item details
  const handleViewClick = (dataId) => {
    setIsViewing(true);
    axios
      .get(`${API_URL}${dataId}/`)
      .then((response) => {
        setViewedData(response.data);
        setIsViewing(false);
      })
      .catch((err) => {
        console.error("Error fetching details:", err.message);
        alert("Error fetching details.");
        setIsViewing(false);
      });
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Success Message */}
      {showSuccessAlert && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-md">
          Data fetched successfully!
        </div>
      )}

      {/* Header */}
      <div className="my-12 text-center">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Web Scraping Results
        </h2>
      </div>

      {/* Loading State */}
      {isLoading ? (
        <div className="text-center mt-12">
          <CircularProgress color="inherit" />
          <p className="mt-4">Loading data...</p>
        </div>
      ) : (
        <>
          {/* Data Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentData.map((dataItem) => (
              <motion.div
                key={dataItem.id}
                className="bg-slate-100 shadow-xl rounded-lg p-6 border border-gray-300"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.1 }}
              >
                <h2 className="text-xl font-bold text-slate-600 mb-4">{dataItem.title}</h2>
                <p className="text-slate-800 mb-4">{dataItem.content?.slice(0, 150) || "No content available..."}...</p>
                <button
                  onClick={() => handleViewClick(dataItem.id)}
                  className="px-4 py-2 bg-transparent border border-blue-500 rounded-md shadow-sm hover:bg-blue-500 hover:text-white transition-all"
                >
                  View <FaEye className="inline-block ml-2" />
                </button>
              </motion.div>
            ))}
          </div>

          {/* Detailed View */}
          {isViewing && (
            <div className="fixed top-4 right-4 bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md flex items-center space-x-2">
              <CircularProgress color="inherit" />
              <span>Loading details...</span>
            </div>
          )}
          {viewedData && (
            <div className="my-12 max-w-2xl mx-auto bg-white p-8 shadow-lg rounded-lg">
              <h3 className="text-3xl font-bold text-blue-600">{viewedData.title}</h3>
              <p className="text-lg mt-4">{viewedData.content}</p>
            </div>
          )}

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`px-4 py-2 mx-1 border border-gray-300 rounded-full hover:bg-gray-200 ${
                currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "text-black"
              }`}
            >
              {"<<"}
            </button>

            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 mx-1 border border-gray-300 rounded-full hover:bg-gray-200 ${
                  currentPage === index + 1 ? "bg-blue-500 text-white" : "text-black"
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage >= totalPages}
              className={`px-4 py-2 mx-1 border border-gray-300 rounded-full hover:bg-gray-200 ${
                currentPage >= totalPages ? "text-gray-400 cursor-not-allowed" : "text-black"
              }`}
            >
              {">>"}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default WebScraper;
