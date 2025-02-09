import React from "react";

const Navbar = ({ title, topic, marks }) => {
  return (
    <nav className="fixed w-full bg-gradient-to-r from-purple-600 to-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">{title}</h1>
          <h2 className="text-2xl italic">Topic: {topic}</h2>
        </div>
        <div className="flex flex-col gap-4 text-lg">
          <div className="bg-green-500 px-3 py-1 rounded-full">
            Correct: +{marks.positive}
          </div>
          <div className="bg-red-500 px-3 py-1 rounded-full">
            Incorrect: -{marks.negative}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
