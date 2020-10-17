import React from 'react';
import {
  Header
} from './components/base.js';
import './sass/base.scss'
import * as core from './core/functions.js';

function App()  {

  core.LoadIn();
 
  return (
    <div className="App">
      <Header className="App-header" />
      <div className="component component--lengthwise hover--boxshadow__reverse list">
        <div className="Current-Song blob hover--sizeup focus--boxshadow transition">
          <button onClick={core.BtnPlay}>Play</button>
        </div>
      </div>
    </div>
  );
}

export default App;