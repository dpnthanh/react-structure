import React from 'react';
import './app.scss';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../home';
import ExcelPage from '../excel';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path='/'>
            <HomePage/>
          </Route>
          <Route path='/excel'>
            <ExcelPage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
