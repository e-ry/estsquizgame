import React, { useState } from "react";
import OptionList from "./optionList";
import Question from "./question";

export default function Quizcard({question, options, setScore, score }){

    
    return(
        <div>
            <Question questionText= {question.questionText} />
            <OptionList options = {options} setScore = {setScore} score={score}/>
        </div>
    )

}