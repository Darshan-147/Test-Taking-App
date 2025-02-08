import React from "react";

const Navbar = ({ title, topic }) => {
  return (
    <nav className="w-full bg-gradient-to-r from-purple-600 to-blue-600 p-4 text-white">
      <div className="container mx-auto flex flex-col gap-2">
        <h1 className="text-3xl font-bold">{title}</h1>
        <h2 className="text-2xl italic">Topic: {topic}</h2>
      </div>
    </nav>
  );
};

export default Navbar;
