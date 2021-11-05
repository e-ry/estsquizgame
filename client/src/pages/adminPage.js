import React, { useEffect } from 'react';

export default function AdminPage(props) {

  useEffect(() => {
    console.log("admin page!")
  });

  const testQuestion = {
    "questionType": "choice",
    "questionText": "I put this question",
    "category": "backend",
    "options": [["option1", true], ["option2", false], ["option3", false], ["option4", false]],
    "difficulty": "medium",
    "id": "10"
  }

  console.log(testQuestion)
  console.log(JSON.stringify(testQuestion))

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
    <button className="bg-green" onClick={postQuestion}>BUTTON</button>
    </>
  );
}
