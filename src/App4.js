import React from 'react';
import logo from './logo.svg';
import './App.css';
import userEvent from '@testing-library/user-event';
import { Clock } from './components/Clock';

function Greeting(props){
  return (
    <div>
      <h1>Hello~~ {props.name}</h1>
    </div>
  );
}

function App4() {
  return (
    <div className="App4">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <p>
          App4
          {/*추가*/}
          <Greeting name={"App4"}/>
          <Clock/>     
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
         
        >
          Learn React
          
        </a>

      </header>
    </div>
  );
}

export default App4;
