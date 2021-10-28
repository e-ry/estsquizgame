import React, { useEffect, useState } from 'react';
import Quizcard from '../components/quizcard';

export default function QuizPage() {
  /*
     const questionsMock = [
         {questionId: "0", questionText: "dummytext1", nrOfOptions: "3", nrOfAnswers:"1", typeKey:"1", categoryKey:"1"},
         {questionId: "1", questionText: "dummytext2", nrOfOptions: "3", nrOfAnswers:"1", typeKey:"1", categoryKey:"1"},
         {questionId: "2", questionText: "dummytext3", nrOfOptions: "3", nrOfAnswers:"1", typeKey:"1", categoryKey:"1"},
         {questionId: "3", questionText: "dummytext4", nrOfOptions: "3", nrOfAnswers:"1", typeKey:"1", categoryKey:"3"},
         {questionId: "4", questionText: "dummytext5", nrOfOptions: "3", nrOfAnswers:"1", typeKey:"1", categoryKey:"3"},
         {questionId: "5", questionText: "dummytext6", nrOfOptions: "4", nrOfAnswers:"2", typeKey:"1", categoryKey:"4"},
         {questionId: "6", questionText: "dummytext7", nrOfOptions: "2", nrOfAnswers:"2", typeKey:"1", categoryKey:"2"},
     ];*/

  // const options = [
  //     {optionId:"1", optionText:"hey", isAnswer: false },
  //     {optionId:"2", optionText:"hoo", isAnswer: false},
  //     {optionId:"3", optionText:"heeey", isAnswer: false},
  //     {optionId:"4", optionText:"hooo", isAnswer: true},
  //     {optionId:"5", optionText:"heeeey", isAnswer: false},
  //     {optionId:"6", optionText:"hoooo", isAnswer: false},
  // ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setQuestions(questions);
    getAllQuestions().then((r) => setLoading(false));
  }, []);

  const getAllQuestions = async () => {
    const response = await fetch('http://localhost:5000/questions/');
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message.a);
    }
    console.log(body);
    setQuestions(body);
    return body;
  };

  return loading ? (
    <div> Loading...</div>
  ) : (
    <div className="bg-purple-100 h-screen w-full text-center font-mono">
      <h2 className="text-center py-10">
        {questions[currentQuestion].categoryName}
      </h2>
      <Quizcard
        question={questions[currentQuestion]}
        setScore={setScore}
        score={score}
      />
      <button
        className="my-28 bg-purple-400 text-white px-5 py-1 rounded"
        onClick={() => setCurrentQuestion(currentQuestion + 1)}
      >
        Next Question
      </button>
    </div>
  );
}
