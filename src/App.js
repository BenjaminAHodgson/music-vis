import React from "react";
import { Header } from "./components/base.js";
import "./sass/base.scss";
import * as core from "./core/functions.js";
import * as init from "./core/init.js";
import * as animate from './core/animate.js';
class App extends React.Component {

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    core.LoadIn();
    init.three.InitThree();
    animate.collectAudio();
  }


  render() {
    return (
        <div className="App">
          <Header className="App-header" />
          <div className="Content">
            <div ref={this.myRef} className="component component--lengthwise hover--boxshadow__reverse list">
              <div className="Current-Song blob hover--sizeup focus--boxshadow transition">
                <button onClick={core.BtnPlay}>Play</button>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
