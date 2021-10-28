import React, {useState, useEffect} from "react";

export default function Option({option, setOptionSelected, optionSelected, setScore, score}){

    const [answerColor, setAnswerColor] = useState('');

    useEffect(() => {
        console.log(optionSelected);
            if(option.optionId === optionSelected && option.isAnswer){
                setScore(score + 1);
                setAnswerColor("green");
            } else if(option.optionId === optionSelected && !option.isAnswer){
                setAnswerColor("red")
                
            } else if(option.isAnswer && optionSelected){
                setAnswerColor("green");
            }

        
    },[optionSelected]);
    
    
    return(

        <button
            onClick= {() => setOptionSelected(option.optionId)}
            type="button"
            className="btn toggle-btn"
            style={{background: answerColor}}
            disabled={optionSelected}
        >
            <span>
                {option.optionText}
            </span>

      </button>
    )
}