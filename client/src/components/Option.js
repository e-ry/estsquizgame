import React, { useEffect, useState } from 'react';

export default function Option({
  optionText,
  optionTrue,
  setOptionSelected,
  optionSelected,
  setScore,
  score
}) {
  const [answerColor, setAnswerColor] = useState('');

  useEffect(() => {
    if (optionText === optionSelected && optionTrue) {
      setScore(score + 1);
      setAnswerColor('green');
    } else if (optionText === optionSelected && !optionTrue) {
      setAnswerColor('red');
    } else if (optionTrue && optionSelected) {
      setAnswerColor('green');
    }
  }, [optionSelected]);

  return (
    <button
      onClick={() => setOptionSelected(optionText)}
      type="button"
      className="btn toggle-btn shadow-lg bg-purple-300 w-full py-2 my-2"
      style={{ background: answerColor }}
      disabled={optionSelected}
    >
      <span>{optionText}</span>
    </button>
  );
}
