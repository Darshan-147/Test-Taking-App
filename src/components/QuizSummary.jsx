import React from "react";

const QuizSummary = ({ score, totalQuestions }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Quiz Complete!</h1>
        <p className="text-xl text-gray-700 mb-6">
          You scored {score} out of {totalQuestions}
        </p>
        <button 
          onClick={() => window.location.reload()}
          className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:opacity-80 transition-opacity cursor-pointer"
        >
          Restart Quiz
        </button>
      </div>
    </div>
  );
};

export default QuizSummary;
