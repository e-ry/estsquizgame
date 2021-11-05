import React from 'react';

export default function Question(props) {
  const questionText = props.questionText;
  return (
    <div className="mb-10">
      <span>{questionText}</span>
    </div>
  );
}
