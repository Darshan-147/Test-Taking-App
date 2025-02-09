import React, { useEffect, useState } from "react";
import { fetchQuizData } from "../utils/api";
import QuizQuestion from "./QuizQuestion";
import Navbar from "./Navbar";

const QuizStart = ({ darkMode, setDarkMode }) => {
  const [quizData, setQuizData] = useState([]);
  const [quizTitle, setQuizTitle] = useState("");
  const [quizTopic, setQuizTopic] = useState("");
  const [startQuiz, setStartQuiz] = useState(false);

  useEffect(() => {
    const loadQuizData = async () => {
      try {
        const data = await fetchQuizData();
        setQuizData(data.questions);
        console.log(data.questions);
        setQuizTitle(data.title);
        setQuizTopic(data.topic);
      } catch (err) {
        console.error("Error loading quiz data: ", err);
      }
    };
    loadQuizData();
  }, []);

  return (
    <>
      <Navbar
        title={quizTitle}
        topic={quizTopic}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      {!startQuiz ? (
        <div
          className={`min-h-screen ${
            darkMode ? "bg-gray-800" : "bg-gray-200"
          } flex flex-col items-center justify-center p-4`}
        >
          <div
            className={`${
              darkMode ? "bg-gray-700 text-white" : "bg-white"
            } rounded-lg shadow-xl p-8 max-w-md w-full text-center`}
          >
            <h1
              className={`text-3xl font-bold ${
                darkMode ? "text-white" : "text-gray-800"
              } mb-6`}
            >
              Welcome to the Quiz!
            </h1>
            <button
              onClick={() => setStartQuiz(true)}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-120 hover:shadow-xl hover:-translate-y-1 active:scale-95 active:shadow-md"
            >
              Start Quiz
            </button>
          </div>
        </div>
      ) : (
        <QuizQuestion quizData={quizData} darkMode={darkMode} />
      )}
    </>
  );
};

export default QuizStart;
