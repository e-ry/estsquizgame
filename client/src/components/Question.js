import React from "react";

export default function Question(props){
  const questionText = props.questionText;
    return (
      <span>
        {questionText}
      </span>
    );
}