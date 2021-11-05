import React, { useEffect, useState } from 'react';
import Option from './option';

export default function OptionList({ options, setScore, score }) {
  const [optionSelected, setOptionSelected] = useState('');
  useEffect(() => {
    setOptionSelected('');
  });
  return (
    <ul>
      {options.map((option) => {
        return (
          <li className="w-full drop-shadow" key={option[0]}>
            <Option
              optionText={option[0]}
              optionTrue={option[1]}
              setOptionSelected={setOptionSelected}
              optionSelected={optionSelected}
              setScore={setScore}
              score={score}
            />
          </li>
        );
      })}
    </ul>
  );
}
