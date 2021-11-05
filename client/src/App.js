import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import * as ROUTES from './constants/routes';

const StarterPage = lazy(() => import ('./pages/starterPage'));
const QuizPage = lazy(() => import ('./pages/quizPage'));
const ResultPage = lazy(() => import ('./pages/resultPage'));
const AdminPage = lazy(() => import ('./pages/adminPage'));

function App() {

  return( 
    <div >
    <Router>
      <Suspense fallback={<p>loading...</p>}>
        <Switch>
            <Route path={ROUTES.STARTPAGE} component={StarterPage} exact/>
            <Route path={ROUTES.QUIZPAGE} component={QuizPage}/>
            <Route path={ROUTES.RESULTPAGE} component={ResultPage}/>
            <Route path={ROUTES.ADMINPAGE} component={AdminPage}/>
        </Switch>
      </Suspense>
      </Router>
    <starterPage/>
    </div>
  );
}

export default App;