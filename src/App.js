import React from 'react';
import './App.css';
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from '../src/views/Landing.js';
import Home from '../src/views/Home.js';

var hist = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={hist}>
        <Route exact path="/" component={Landing} />
        <Route exact path="/Home" component={Home} />
      </Router>
    </div>
  );
}

export default App;
