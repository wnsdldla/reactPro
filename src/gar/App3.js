import React from 'react';
import logo from './logo.svg';
import './assets/css/App.css';
import userEvent from '@testing-library/user-event';
import { Clock } from '../components/Clock';
import { Toggle } from '../components/Toggle';
import { Toggle2 } from '../components/Toggle2';

function Greeting(props){
  return (
    <div>
      <h1>Hello~~ {props.name}</h1>
    </div>
  );
}

function App3() {
  return (
    <div className="App3">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <p>
          App3
          
          {/*element*/}
          {/*추가*/}
          <Greeting name={"pengun"}/>
          <Clock/>
          <Toggle/>
          <Toggle2/>          
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

export default App3;
