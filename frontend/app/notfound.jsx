"use client";
import { useTheme } from "../app/context/themeContext";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

const NotFound = () => {
  const { theme } = useTheme();
  const router = useRouter();

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h1 className="text-6xl font-extrabold mb-4">
          404
        </h1>
        <h2 className={`text-2xl ${theme === "dark" ? "text-gray-300" : "text-gray-700"} mb-4`}>
          Oops! The page you're looking for doesn't exist.
        </h2>
        <p className={`text-base ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
          It seems you've landed on a page that doesn't exist. You can either go back to the homepage or use the navigation to find what you're looking for.
        </p>
      </motion.div>

      <motion.button
        onClick={() => router.push("/")}
        className={`flex items-center px-6 py-3 bg-transparent border border-gray-500 rounded-full shadow hover:bg-gray-500 hover:text-white transition-all ${theme === "dark" ? "text-gray-100" : "text-gray-800"}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaArrowLeft className="mr-2" /> Go Back to Home
      </motion.button>
    </div>
  );
};

export default NotFound;
