import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/scrape/")
      .then((response) => setProducts(response.data.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">E-Commerce Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4">
            <img 
              src={product.image || "https://via.placeholder.com/150"} 
              alt={product.title} 
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="mt-2 text-lg font-semibold">{product.title}</h2>
            <p className="text-gray-600">{product.description}</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
              View Product
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
