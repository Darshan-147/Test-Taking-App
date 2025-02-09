import React from "react";

const QuizSummary = ({ score, totalQuestions }) => {
  const getScoreRemark = (score) => {
    if (score === 10) {
      return {
        message: "Perfection!",
        className:
          "text-xl font-bold bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-transparent bg-clip-text mb-6",
      };
    } else if (score > 7) {
      return {
        message: "Awesome, you nailed it!",
        className:
          "text-xl font-bold bg-gradient-to-r from-orange-500 to-rose-500 text-transparent bg-clip-text mb-6",
      };
    } else if (score > 3) {
      return {
        message: "Good, but you can do better!",
        className:
          "text-xl font-bold bg-gradient-to-r from-emerald-500 to-amber-500 text-transparent bg-clip-text mb-6",
      };
    } else {
      return {
        message: "Buckle up! You need to work harder...",
        className:
          "text-xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text mb-6",
      };
    }
  };

  const scoreRemark = getScoreRemark(score);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Quiz Complete!
        </h1>
        <p className="text-xl text-gray-700 mb-6">
          You scored {score} out of {totalQuestions}
        </p>
        <p className={scoreRemark.className}>{scoreRemark.message}</p>
        <button
          onClick={() => window.location.reload()}
          className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-120 hover:shadow-xl hover:-translate-y-1 active:scale-95 active:shadow-md"
        >
          Restart Quiz
        </button>
      </div>
    </div>
  );
};

export default QuizSummary;
