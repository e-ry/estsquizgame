import React from "react";

export default function Option(props){
    return(

        <button
        onClick={console.log}
        type="button"
        className="btn toggle-btn"
      >
        <span>{props.name}</span>
      </button>
    )
}