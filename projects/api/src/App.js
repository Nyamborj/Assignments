import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Display from './Display';
import Literal from './Literal'

class App extends Component {
  constructor() {
    super()
    this.state = {
      targets: [],
    }
  }

  render() {
    return (
      <div class = "wrapper">
      <div className="App" class = "grid-container">
        <InputForm />
        <Display info={this.state.targets} />
      </div>
      </div>
    );
  }
}

export default App;
