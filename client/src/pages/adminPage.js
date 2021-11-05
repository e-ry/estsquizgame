import React, { useEffect, useState } from 'react';

export default function AdminPage(props) {

  const [questionType, setQuestionType] = useState('');

  useEffect(() => {
    console.log(questionType)
  }, [questionType]);

  const testQuestion = {
    "questionType": "choice",
    "questionText": "I put this question",
    "category": "backend",
    "options": [["option1", true], ["option2", false], ["option3", false], ["option4", false]],
    "difficulty": "medium",
    "id": "10"
  }

  const postQuestion = async () => {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(testQuestion)
    };
    const response = await fetch(
      'https://8zjpvzfro8.execute-api.eu-west-1.amazonaws.com/items'
    , requestOptions);
    const body = await response.json();
    console.log(body)
    if (response.status !== 200) {
      throw Error(body.message.a);
    }
    console.log(body.Items);
    return body;
  };

  return(
    <>
    <div>HELLO</div>
    <form> 
      <label>
        question:
        <input className="bg-purple-100" type="text" onChange={(e) => setQuestionType(e.target.value)}/>
      </label>
      <label>
        <select onChange={(e) => setQuestionType(e.target.value)}>
          <option value="choice">Multiple choice</option>
          <option value="Fill in the blanks">Lime</option>
          <option value="IDK MAN">Coconut</option>
        </select>
      </label>
    </form>
    <button className="bg-green" onClick={postQuestion}>BUTTON</button>
    </>
  );
}
