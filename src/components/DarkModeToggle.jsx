import React from "react";

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="px-4 py-2 rounded-lg bg-opacity-20 bg-white hover:bg-opacity-30 transition-all duration-200 flex items-center gap-2"
    >
      {darkMode ? (
        <>
          <span>☀️</span>
          <span>Light Mode</span>
        </>
      ) : (
        <>
          <span>🌙</span>
          <span>Dark Mode</span>
        </>
      )}
    </button>
  );
};

export default DarkModeToggle;