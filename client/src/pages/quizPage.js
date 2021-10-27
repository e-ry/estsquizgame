import React, { useState } from "react";
import { Route } from "react-router";
import * as ROUTES from "../constants/routes";
import { useHistory } from "react-router-dom";
import Quizcard from "../components/quizcard";



export default function QuizPage(){

    const questions = [
        {questionId: "0", questionText: "dummytext1", nrOfOptions: "3", nrOfAnswers:"1", typeKey:"1", categoryKey:"1"},
        {questionId: "1", questionText: "dummytext2", nrOfOptions: "3", nrOfAnswers:"1", typeKey:"1", categoryKey:"1"},
        {questionId: "2", questionText: "dummytext3", nrOfOptions: "3", nrOfAnswers:"1", typeKey:"1", categoryKey:"1"},
        {questionId: "3", questionText: "dummytext4", nrOfOptions: "3", nrOfAnswers:"1", typeKey:"1", categoryKey:"3"},
        {questionId: "4", questionText: "dummytext5", nrOfOptions: "3", nrOfAnswers:"1", typeKey:"1", categoryKey:"3"},
        {questionId: "5", questionText: "dummytext6", nrOfOptions: "4", nrOfAnswers:"2", typeKey:"1", categoryKey:"4"},
        {questionId: "6", questionText: "dummytext7", nrOfOptions: "2", nrOfAnswers:"2", typeKey:"1", categoryKey:"2"},
    ];

    const options = [
        {optionId:"1", optionText:"hey", isAnswer: false },
        {optionId:"2", optionText:"hoo", isAnswer: false},
        {optionId:"3", optionText:"heeey", isAnswer: false},
        {optionId:"4", optionText:"hooo", isAnswer: true},
        {optionId:"5", optionText:"heeeey", isAnswer: false},
        {optionId:"6", optionText:"hoooo", isAnswer: false},
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);


    return(
        <div>
            <h2>{score}</h2>
            <h1>Quizz Lightyear!</h1>

            <Quizcard question = {questions[currentQuestion]} options = {options} setScore = {setScore} score = {score}/>

            <button
                onClick={() => setCurrentQuestion(currentQuestion + 1)}
            >
                Next Question
            </button>
            
        </div>
    )
}
