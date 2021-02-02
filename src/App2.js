import React from 'react';
import logo from './logo.svg';
import './App.css';
import userEvent from '@testing-library/user-event';
import { Clock } from './components/Clock';
import {Link, Route, BrowserRouter as Router } from 'react-router-dom';
import App4 from "./App4";

function App2() {
  return (
    <div className="App2">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          App2
          <Clock/>        
        </p>
        <Router>
          <Link to="/App4">
            <button >Learn React</button>
          </Link>
          <Route path="/App4" component={App4}/>
        </Router>

      </header>
    </div>
  );
}

export default App2;
