'use client';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';

const BASE_URL = 'http://127.0.0.1:8000/api/data/'; // Replace with your dynamic data API URL

const ItemDetails = () => {
  const router = useRouter();
  const { id } = router.query; // Get the ID from the URL (could be a hotel, attraction, etc.)
  const [item, setItem] = useState(null); // State to store dynamic item data
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [error, setError] = useState(null); // State for handling errors

  // Fetch item data (hotel, attraction, restaurant, etc.) on client side
  useEffect(() => {
    if (!id) return; // Wait for the ID to be available

    const fetchItem = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${BASE_URL}${id}/`);
        if (!res.ok) {
          throw new Error('Failed to fetch item data');
        }
        const data = await res.json();
        setItem(data); // Set item data to state
      } catch (error) {
        setError(error.message); // Set error message if fetch fails
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  // Show loading spinner while waiting for data
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <CircularProgress color="primary" size={80} />
      </div>
    );
  }

  // Show error message if data fetch failed
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-center text-red-500 text-lg">{error}</p>
      </div>
    );
  }

  // Show "Item not found" if no item data
  if (!item) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-center text-red-500 text-lg">Item not found</p>
      </div>
    );
  }

  // Render item details
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-3xl w-full p-8 bg-white shadow-lg rounded-lg text-center">
        <h1 className="text-5xl font-extrabold text-indigo-600 mb-6">{item.name}</h1>
        <p className="text-gray-700 text-lg leading-relaxed">{item.description}</p>
        <button
          onClick={() => router.back()}
          className="mt-6 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition-all"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ItemDetails;
