import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Hitlist from './Hitlist';

class App extends Component {
  constructor() {
    super()
    this.state = {
      targets: []
    }
  }

  componentDidMount() {
    axios.get('http://api.vschool.io:6543/hitlist.json')
    .then(response => {
      this.setState({ targets: response.data})
    })
  }

  render() {
    return (
      <div class = "wrapper">
      <div className="App" class = "grid-container">
        <h1 class = "Column A">Open Contracts</h1>
        <Hitlist info={this.state.targets} class= "Column A"/>
        <h1 class = "Column B">Priority Contracts</h1>
        <Hitlist info={this.state.targets} class= "Column B"/>
      </div>
      </div>
    );
  }
}

export default App;
