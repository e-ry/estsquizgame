import React, { useState } from "react";
import OptionList from "./optionList";
import Question from "./Question";

export default function Quizcard({question, setScore, score }){
    
    return(
        <div>
            <Question questionText= {question.questionText} />
            <OptionList options = {question.options} setScore = {setScore} score={score}/>
        </div>
    )

}