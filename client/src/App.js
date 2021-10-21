import React, { Component } from 'react';
import './App.css';
import Question from './components/Question';

class App extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    this.callBackendAPI()
      .then((res) => this.setState({ data: res.express }))
      .catch((err) => console.log(err));
  }
  // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message.a);
    }
    return body;
  };

  render() {
    return (
      <div className="todoapp stack-large">
      <h1>BuzzQuizz</h1>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            Lets start quizzing!
          </label>
        </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
      >
        <Question name ="Question" id="Question-1" />
        
      </ul>

      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn">
          <span>Q1</span>
        </button>
        <button type="button" className="btn toggle-btn">
          <span>Q2</span>
        </button>
        <button type="button" className="btn toggle-btn">
          <span>Q3</span>
        </button>
      </div>
    </div>
  );
  }
}

export default App;
