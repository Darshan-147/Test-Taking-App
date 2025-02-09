import React, { useState } from "react";

const QuizSummary = ({ score, totalQuestions, quizData }) => {
  const [showSolutions, setShowSolutions] = useState(false);

  const getScoreRemark = (score) => {
    if (score === 40) {
      return {
        message: "Perfection!",
        className: "text-xl font-bold bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-transparent bg-clip-text mb-6",
      };
    } else if (score > 28) {
      return {
        message: "Awesome, you nailed it!",
        className: "text-xl font-bold bg-gradient-to-r from-orange-500 to-rose-500 text-transparent bg-clip-text mb-6",
      };
    } else if (score > 12) {
      return {
        message: "Good, but you can do better!",
        className: "text-xl font-bold bg-gradient-to-r from-emerald-500 to-amber-500 text-transparent bg-clip-text mb-6",
      };
    } else {
      return {
        message: "Buckle up! You need to work harder...",
        className: "text-xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text mb-6",
      };
    }
  };

  const scoreRemark = getScoreRemark(score);

  const renderSolutions = () => {
    if (!quizData || !quizData.length) {
      return <p className="text-gray-500">No solution data available</p>;
    }

    return quizData.map((question, index) => (
      <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
        <h3 className="font-bold text-lg mb-3 text-gray-800">
          Question {index + 1}: {question.description}
        </h3>
        <div className="pl-4 mb-3">
          <p className="text-green-600 font-semibold flex items-center gap-2">
            <span className="text-lg">✓</span>
            Correct Answer: {
              question.options.find(opt => opt.is_correct)?.description || 'Not available'
            }
          </p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="font-semibold text-gray-700 mb-2">Detailed Solution:</p>
          <p className="text-gray-600 leading-relaxed">
            {question.detailed_solution || 'No detailed solution available'}
          </p>
        </div>
      </div>
    ));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl w-full">
        {!showSolutions ? (
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Quiz Complete!
            </h1>
            <p className="text-xl text-gray-700 mb-6">
              You scored {score} out of {totalQuestions * 4}
            </p>
            <p className={scoreRemark.className}>{scoreRemark.message}</p>
            <div className="space-y-4">
              <button
                onClick={() => window.location.reload()}
                className="bg-gradient-to-r from-purple-600 to-blue-600 button"
              >
                Restart Quiz
              </button>
              <br />
              <button
                onClick={() => setShowSolutions(true)}
                className="bg-gradient-to-r from-green-600 to-teal-600 button"
              >
                View Detailed Solutions
              </button>
            </div>
          </div>
        ) : (
          <div className="pt-32">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold text-gray-800">
                Detailed Solutions
              </h1>
              <button
                onClick={() => setShowSolutions(false)}
                className="text-purple-600 hover:text-purple-800 flex items-center gap-2 cursor-pointer"
              >
                <span>←</span>
                <span>Back to Summary</span>
              </button>
            </div>
            <div className="space-y-6 max-h-[70vh] overflow-y-auto pr-4">
              {renderSolutions()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizSummary;