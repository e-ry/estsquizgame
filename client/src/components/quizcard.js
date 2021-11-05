import React from 'react';
import OptionList from './optionList';
import Question from './question';

export default function Quizcard({ question, setScore, score }) {
  return (
    <div className="pt-20 text-center px-10">
      <Question questionText={question.questionText} />
      <OptionList
        options={question.options}
        setScore={setScore}
        score={score}
      />
    </div>
  );
}
