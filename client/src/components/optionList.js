import React, { useEffect, useState } from "react";
import Option from "./option";

export default function OptionList({options, setScore, score }){

    const [optionSelected, setOptionSelected] = useState(false);
    useEffect(() => {
        setOptionSelected(false);
    });
   
    return (
        
    <ul> 
        
        {options.map((option, index)=>{
            return <li key={option.optionId}> 
                        <Option option = {option} setOptionSelected = {setOptionSelected} 
                        optionSelected = {optionSelected} setScore = {setScore} score = {score}/> 
                    </li>
        })}
    
    </ul>

            )

}
