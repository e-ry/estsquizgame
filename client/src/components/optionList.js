import React from "react";
import Option from "./option";

export default function OptionList({options, setScore, score }){

    
    return (
        
    <ul> 
        
        {options.map((option, index)=>{
            return <li key={index}> 
                        <Option option = {option} setScore = {setScore} score={score}/> 
                    </li>
        })}
    
    </ul>

            )

}



/*

    */
