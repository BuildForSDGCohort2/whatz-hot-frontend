import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import header from './container/Header';
import './App.css';
import Error404 from './container/Error404';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={header} />
        <Route path='*' component={Error404} />
      </Switch>
    </Router>
  );
};

export default App;
