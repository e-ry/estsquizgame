import React, { lazy, useEffect, useState, Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Question from './components/Question';
import Option from './components/Option';
import starterPage from './pages/starterPage';
import * as ROUTES from './constants/routes'

const StartPage = lazy(() => import ('./pages/starterPage'));

function App() {
  const [questions, setQuestions] = useState();
  const [question, setQuestion] = useState();
  const [options, setOptions] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //getAllQuestions();
    //getOptionsById(2);
    //getQuestionById(2)
    //.then((r) => setLoading(false));
  }, []);

  const getOptionsById = async (id) => {
    const response = await fetch(
      'http://localhost:5000/options/' + id.toString()
    );
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message.a);
    }
    setOptions(body);
    return body;
  };

  const getQuestionById = async (id) => {
    const response = await fetch(
      'http://localhost:5000/questions/' + id.toString()
    );
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message.a);
    }
    setQuestion(await body);
    return body;
  };

  const getAllQuestions = async () => {
    const response = await fetch('http://localhost:5000/questions/');
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message.a);
    }
    setQuestions(body);
    return body;
  };

  const print = async () => {
    await getOptionsById(3)
      .then((r) => console.log(questions))
      .catch((err) => console.log(err));
    await getQuestionById(3).catch((err) => console.log(err));
    await getAllQuestions().catch((err) => console.log(err));
  };

  return(
    <div>
    <Router>
      <Suspense fallback={<p>loading...</p>}>
        <Switch>
            <Route path={ROUTES.STARTPAGE} component={StartPage}/>
        </Switch>
      </Suspense>
      </Router>
    <starterPage/>
    </div>
  );
}

export default App;
/*
class App extends Component {
  state = {
    questions: null,
    users: null
  };

  componentDidMount() {
    this.getOptionsById(3)
      .then((res) => this.setState({ data: res.express }))
      .catch((err) => console.log(err));
    this.getQuestionById(3)
      .then((res) => this.setState({ data: res.express }))
      .catch((err) => console.log(err));
    this.getAllQuestions()
      .then((res) => this.setState({ questions: res.express }))
      .catch((err) => console.log(err));
  }

  getOptionsById = async (id) => {
    const response = await fetch(
      'http://localhost:5000/options/' + id.toString()
    );
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message.a);
    }
    return body;
  };

  getQuestionById = async (id) => {
    const response = await fetch(
      'http://localhost:5000/questions/' + id.toString()
    );
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message.a);
    }
    return body;
  };

  getAllQuestions = async () => {
    const response = await fetch('http://localhost:5000/questions/');
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
        <ul role="list" className="todo-list stack-large stack-exception">
          <Question name="Question" id="Question-1" />
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
*/
