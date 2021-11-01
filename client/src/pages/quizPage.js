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
    const [progressbar, setProgressbar] = useState('w-1/4');

    useEffect(() => {
        getAllQuestions()
        .then((r) => setLoading(false));
    }, []);

    useEffect(() => {
        switch(currentQuestion) {
            
            case 1:
                setProgressbar('w-2/4');
            break
            case 2:
                setProgressbar('w-3/4');
            break
            case 3:
                setProgressbar('w-full'); 
            break   
        }
    },[currentQuestion])
    
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

                <div class="relative pt-1 pt-6 pl-6 pr-6">
                    <div class="overflow-hidden h-2 text-xs flex rounded bg-purple-200">
                        <div
                            class={`
                            shadow-none
                            flex flex-col
                            text-center
                            whitespace-nowrap
                            text-white
                            justify-center
                            bg-purple-500
                            ${progressbar}
                            `}
                            ></div>
                    </div>
                </div>

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
