import React, { useEffect, useState } from 'react';

export default function Option({
  option,
  setOptionSelected,
  optionSelected,
  setScore,
  score
}) {
  const [answerColor, setAnswerColor] = useState('');

  useEffect(() => {
    console.log(optionSelected);
    if (option.optionId === optionSelected && option.isAnswer) {
      setScore(score + 1);
      setAnswerColor('green');
    } else if (option.optionId === optionSelected && !option.isAnswer) {
      setAnswerColor('red');
    } else if (option.isAnswer && optionSelected) {
      setAnswerColor('green');
    }
  }, [optionSelected]);

  return (
    <button
      onClick={() => setOptionSelected(option.optionId)}
      type="button"
      className="btn toggle-btn shadow-lg bg-purple-300 w-full py-2 my-2"
      style={{ background: answerColor }}
      disabled={optionSelected}
    >
      <span>{option.optionText}</span>
    </button>
  );
}
