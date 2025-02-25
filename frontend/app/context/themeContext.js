// app/context/themeContext.js

"use client"; 
import { createContext, useContext, useEffect, useState } from "react";

// Create the ThemeContext
const ThemeContext = createContext();

// ThemeProvider component to provide the theme context to the app
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light"; // Retrieve theme from localStorage or default to light
    }
    return "light"; // Default theme if running on server
  });

  // Apply the theme to the document element and store it in localStorage
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark"); // Toggle dark class on HTML element
    localStorage.setItem("theme", theme); // Store theme in localStorage
  }, [theme]);

  // Function to toggle between dark and light theme
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children} {/* Render the children passed to ThemeProvider */}
    </ThemeContext.Provider>
  );
}

// Custom hook to use the theme context
export function useTheme() {
  return useContext(ThemeContext); // Return the context value (theme and toggleTheme)
}
