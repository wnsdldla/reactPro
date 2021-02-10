import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './assets/css/App.css';

import { Clock } from './components/Clock';
import customInfo from './customInfo';

function App2() {
  const [info , setInfo] = useState('');
  
  function callback(data){
    setInfo(data);
  }
  useEffect(
    ()=>{
      console.log("before");
      customInfo('/info',callback);
    },[]
  );

  return (
    <div className="App2">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          App2
          <Clock/>        
        </p>
        전달받은 정보  : {info}
      </header>
    </div>
  );
}

export default App2;
