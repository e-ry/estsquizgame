import React from "react";

export default function Option(props){
    const option = props.option;
    return(

        <button
            onClick={console.log}
            type="button"
            className="btn toggle-btn"
        >
            <span>
                {option.optionText}
            </span>

      </button>
    )
}