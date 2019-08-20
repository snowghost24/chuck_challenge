import React, { Component } from 'react';
import limelightlg from './limelight.gif'
import './App.css';
import FetchJokesButton from './components/FetchJokesButton';
import JokeList from './components/JokeList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayLogo: true
    }
  }

  componentDidMount() {
    // sets displayLogo to false after 3  secons 
    setTimeout(() => this.setState({ displayLogo: false }), 3000);
  }

  render() {
    const logoDisplay = (
      <div className="App-logo">
        <img src={limelightlg} alt="logo" />
      </div>
    )
    const bodyDisplay = (
      <div className="App-body">
        <FetchJokesButton />
        <JokeList />
      </div>
    )
    return (
      <div className="App">
        {this.state.displayLogo ? logoDisplay : bodyDisplay}
      </div>
    );
  }
}

export default App;
