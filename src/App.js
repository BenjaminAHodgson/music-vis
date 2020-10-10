import React from 'react';
import './sass/base.scss'
import * as core from './core/functions.js';

function App()  {
 
  return (
    <div className="App">
      <header className="App-header">
        <div className="Current-Song blob hover--sizeup focus--boxshadow transition">
          <button onClick={core.BtnPlay}>Play</button>
        </div>
      </header>
    </div>
  );
}

export default App;