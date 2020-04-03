import React from 'react';
import useHandlers from './App.main';
import './app.scss';
import { HashRouter as Router, Route } from 'react-router-dom';
import HomePage from '../home';

const App = () => {
  const {

  } = useHandlers();

  return (
    <div className="app">
    <h1>test</h1>
      <Router>
        <Route path='/'>
          <HomePage/>
        </Route>
      </Router>
    </div>
  )
}

export default App;
