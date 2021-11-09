import React, { useEffect, useState } from 'react';

export default function AdminPage(props) {
  const [questionType, setQuestionType] = useState('choice');
  const [questionText, setQuestionText] = useState('-');
  const [category, setCategory] = useState('frontend');
  const [difficulty, setDifficulty] = useState('easy');
  const [option1, setOption1] = useState(['', false]);
  const [option2, setOption2] = useState(['', false]);
  const [option3, setOption3] = useState(['', false]);
  const [option4, setOption4] = useState(['', false]);
  const [count, setCount] = useState(0);
  const [items, setItems] = useState(undefined);

  const getDump = async () => {
    const response = await fetch(
      'https://8zjpvzfro8.execute-api.eu-west-1.amazonaws.com/items'
    );
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message.a);
    }
    setCount(body.Count);
    setItems(body.Items);
    return body;
  };

  useEffect(() => {
    console.log('Feching the current questions');
    getDump();
  }, []);

  const postQuestion = async () => {
    const question = {
      questionType: questionType,
      questionText: questionText,
      category: category,
      options: [option1, option2, option3, option4],
      difficulty: difficulty,
      id: (count + 1).toString()
    };
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(question)
    };
    const response = await fetch(
      'https://8zjpvzfro8.execute-api.eu-west-1.amazonaws.com/items',
      requestOptions
    );
    const body = await response.json();
    console.log(body);
    if (response.status !== 200) {
      throw Error(body.message.a);
    }
    console.log(body.Items);
    return body;
  };

  const deleteQuestion = async (index) => {
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    };
    const response = await fetch(
      'https://8zjpvzfro8.execute-api.eu-west-1.amazonaws.com/items/' + index,
      requestOptions
    );
    const body = await response.json();
    console.log(body);
    if (response.status !== 200) {
      throw Error(body.message.a);
    }
    return body;
  };

  return (
    <>
      <div>SUBMIT A QUESTION</div>
      <form>
        <label>
          Question:
          <input
            className="bg-purple-100"
            type="text"
            onChange={(e) => setQuestionText(e.target.value)}
          />
        </label>
        <br></br>
        <label>
          Type:
          <select onChange={(e) => setQuestionType(e.target.value)}>
            <option value="choice">Multiple choice</option>
            <option value="blanks">Fill in the blanks</option>
            <option value="IDK MAN">Other</option>
          </select>
        </label>
        <br></br>
        <label>
          Difficulty:
          <select onChange={(e) => setDifficulty(e.target.value)}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </label>
        <br></br>
        <label>
          Category:
          <select onChange={(e) => setCategory(e.target.value)}>
            <option value="backend">Backend</option>
            <option value="frontend">Frontend</option>
            <option value="data">Data</option>
          </select>
        </label>
        <br></br>
      </form>
      <label>
        Option:
        <input
          className="bg-purple-100"
          type="text"
          onChange={(e) => setOption1([e.target.value, option1[2]])}
        />
        <label>
          {' '}
          true
          <input
            type="radio"
            id="true"
            name="option3"
            value={true}
            onChange={(e) => setOption1([option1[1], true])}
          ></input>
        </label>
      </label>
      <br></br>
      <label>
        Option:
        <input
          className="bg-purple-100"
          type="text"
          onChange={(e) => setOption2([e.target.value, option2[2]])}
        />
        <label>
          {' '}
          true
          <input
            type="radio"
            id="true"
            name="option3"
            value={true}
            onChange={(e) => setOption1([option2[1], true])}
          ></input>
        </label>
      </label>
      <br></br>
      <label>
      Option:
        <input
          className="bg-purple-100"
          type="text"
          onChange={(e) => setOption3([e.target.value, option3[2]])}
        />
        <label>
          {' '}
          true
          <input
            type="radio"
            id="true"
            name="option3"
            value={true}
            onChange={(e) => setOption1([option3[1], true])}
          ></input>
        </label>
      </label>
      <br></br>
      <label>
        Option:
        <input
          className="bg-purple-100"
          type="text"
          onChange={(e) => setOption4([e.target.value, option4[2]])}
        />
        <label>
          {' '}
          true
          <input
            label="true"
            type="radio"
            id="true"
            name="option3"
            value={true}
            onChange={(e) => setOption1([option4[1], true])}
          ></input>
        </label>
      </label>
      <br></br>
      <button className="bg-green" onClick={postQuestion}>
        SUBMIT
      </button>
      <br></br>
      DELETE A QUESTION
      <button onClick={(e) => deleteQuestion(6)} >
          Delete the 6th question
        </button>
      <label>
        Option:
        <input
          className="bg-purple-100"
          type="text"
          onChange={(e) => setOption1([e.target.value, option1[2]])}
        />
      </label>
      {items &&
        items.map((item) => {
          return (
            <ul>
              <li className="w-full drop-shadow" key={item.id}>
                {item.id}
                <br></br>
                {item.questionText}
                <br></br>
                {item.options.map((option) => {
                  return(
                    <>
                    <div>{option}</div>
                    </>
                  );
                })}
              </li>
              <br></br>
            </ul>
          );
        })}
    </>
  );
}
