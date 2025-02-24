"use client";

import { useEffect, useState, useContext } from "react";
import axios from "axios";
import Image from "next/image";
import { FaShoppingBag } from "react-icons/fa";
import { ThemeContext } from "../app/context/themeContext";

export default function DataDisplay() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/scrape/")
      .then((response) => {
        setProducts(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <div className={`min-h-screen p-6 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}>
      <h1 className="text-4xl font-bold text-center mb-8 flex items-center justify-center gap-2">
        <FaShoppingBag className="text-blue-500" size={40} />
        E-Commerce Products
      </h1>

      {error && (
        <p className="text-red-500 text-center">
          ⚠️ Failed to load products. Please try again later.
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading
          ? Array(8)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className={`animate-pulse shadow-md rounded-lg p-4 ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}
                >
                  <div className="w-full h-40 bg-gray-300 rounded-md"></div>
                  <div className="h-4 bg-gray-300 rounded w-3/4 my-3"></div>
                  <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                  <div className="h-10 bg-gray-300 rounded w-full mt-4"></div>
                </div>
              ))
          : products.map((product, index) => (
              <div
                key={index}
                className={`shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}
              >
                <Image
                  src={product.image || "https://via.placeholder.com/300"}
                  alt={product.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold">
                    {product.title}
                  </h2>
                  <p className="text-sm mt-1 line-clamp-2">
                    {product.description}
                  </p>
                  {product.price && (
                    <p className="text-green-600 font-bold mt-2">
                      ${product.price}
                    </p>
                  )}
                  <button className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                    View Product
                  </button>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}
