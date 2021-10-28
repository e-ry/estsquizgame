import React, { useEffect, useState } from 'react';
import Quizcard from '../components/quizcard';
import { useHistory } from "react-router-dom";
import * as ROUTES from "../constants/routes";


export default function QuizPage() {

    const history = useHistory();
    const toResultPage = () => {history.push({pathname:ROUTES.RESULTPAGE, state:score })};


    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [questions, setQuestions] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllQuestions()
        .then((r) => setLoading(false));
    }, []);
    
    const getAllQuestions = async () => {
        const response = await fetch('http://localhost:5000/questions/');
        const body = await response.json();
        if (response.status !== 200) {
          throw Error(body.message.a);
        }
        setQuestions(body);
        return body;
    };

    return loading ?(
        <div> Loading...</div>) :
        (
            <div className="bg-purple-100 h-screen w-full text-center font-mono">
            <h2 className="text-center py-10">
              {questions[currentQuestion].categoryName}
            </h2>
            <Quizcard question = {questions[currentQuestion]} setScore = {setScore} score = {score}/>

            <button
                className="my-28 bg-purple-500 text-white px-5 py-1 rounded"
                onClick={() => currentQuestion < (questions.length-1) ? setCurrentQuestion(currentQuestion + 1) : toResultPage() }
            >
                NEXT
            </button>
            
        </div>
    )
}
