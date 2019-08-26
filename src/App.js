import React, { Component } from 'react';
import limelightlg from './assets/images/limelight.gif'
import './App.css';
import FetchJokesButton from './components/FetchJokesButton';
import JokeList from './components/JokeList/JokeList';

class App extends Component {
  state = {
    displayLogo: true
  }
  
  componentDidMount() {
    // sets displayLogo to false after 3  seconds
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

