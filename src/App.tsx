import React from 'react';
import logo from './logo.svg';
import './App.css';
import {CounterNumbers} from "./CounterNubres/CounterNumbers";
import {SettingCounter} from "./SettingCounter/SettingCounter";



function App() {

  return (
    <div className="App">
        <CounterNumbers  />
        <SettingCounter />
    </div>
  );
}

export default App;
