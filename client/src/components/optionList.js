import React, { useEffect, useState } from "react";
import Option from "./Option";

export default function OptionList({options, setScore, score }){

    const [optionSelected, setOptionSelected] = useState('');
    useEffect(() => {
        setOptionSelected('');
    });
   
    return (
        
    <ul> 
        
        {options.map((option, index)=>{
            return <li className="w-full drop-shadow" key={option.optionId}> 
                        <Option option = {option} setOptionSelected = {setOptionSelected} 
                        optionSelected = {optionSelected} setScore = {setScore} score = {score}/> 
                    </li>
        })}
    
    </ul>

            )

}
