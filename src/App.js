import React from 'react';
import './App.css';
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from '../src/views/Landing.js';

var hist = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={hist}>
        <Route exact path="/" component={Landing} />
      </Router>
    </div>
  );
}

export default App;
