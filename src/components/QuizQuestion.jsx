import React, { useEffect, useState } from "react";
import QuizSummary from "./QuizSummary";

const QuizQuestion = ({ quizData }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showSummary, setShowSummary] = useState(false);
  const [timeLeft, setTimeLeft] = useState(Infinity); // Timer for each question
  const [showCorrect, setShowCorrect] = useState(false);
  const [showIncorrect, setShowIncorrect] = useState(false);

  // Timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestion]);

  // Automatically move to the next question if time runs out
  useEffect(() => {
    if (timeLeft === 0) {
      handleAnswer(false);
    }
  }, [timeLeft]);

  //   Handle user's answer
  const handleAnswer = (is_correct) => {
    if (is_correct) {
      setScore(score + 4);
      setShowCorrect(true);
      setTimeout(() => setShowCorrect(false), 500);
    }
    else if(!is_correct){
      setScore(score - 1);
      setShowIncorrect(true);
      setTimeout(() => setShowIncorrect(false), 500);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
      setTimeLeft(Infinity);
    } else {
      setShowSummary(true);
    }
  };

  if (showSummary) {
    return <QuizSummary score={score} totalQuestions={quizData.length} />;
  }

  // Destructuring questions and options from quizData
  const { description, options } = quizData[currentQuestion];

  const progress = ((currentQuestion + 1) / quizData.length) * 100;

  return (
    <div className="min-h-screen bg-gray-100 pt-32 p-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-6">
        <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">
          Question {currentQuestion + 1}
        </h2>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
          <div
            className="bg-gradient-to-r from-purple-600 to-blue-600 h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Timer */}
        <div className="text-lg font-semibold text-gray-700 mb-4">
          Time Left: {timeLeft} seconds
        </div>

        {/* Terrific Error it was! I was wondering why questions are not appearing, and solving it took me 3 hours */}
        {/* {questions && questions.length > 0 ? (
          <ul className="text-xl text-gray-700 mb-6">
            {questions.map((question, id) => (
              <li key={id}>
                <p>{question.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No questions available.</p>
        )} */}

        {/* Question */}
        <p className="text-xl text-gray-700 mb-6">{description}</p>

        {/* Points */}
        <div className="flex items-center gap-4 mb-6">
          <p className="text-lg font-semibold text-purple-600">
            Points: {score}
          </p>
          {showCorrect && (
            <span className="text-green-500 font-bold animate-[fadeIn_0.5s_ease-in] flex items-center gap-2">
              Correct! <span className="text-2xl">✓</span>
            </span>
          )}
          {showIncorrect && (
            <span className="text-red-500 font-bold animate-[fadeIn_0.5s_ease-in] flex items-center gap-2">
              Incorrect! <span className="text-2xl">×</span>
            </span>
          )}
        </div>

        {/* Options */}
        <div className="grid grid-cols-1 gap-4">
          {options.map((option, id) => (
            <button
              key={id}
              onClick={() => handleAnswer(option.is_correct)}
              className="bg-white border-2 border-purple-600 text-purple-600 font-semibold py-3 px-6 rounded-lg hover:bg-purple-600 hover:text-white transition-colors cursor-pointer"
            >
              {option.description}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizQuestion;
