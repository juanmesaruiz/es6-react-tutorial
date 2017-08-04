import React, { Component } from 'react';
import Header from './components/Header.jsx';
import Intro from './components/Intro';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <p> This is my first react app</p>
        <Intro />
      </div>
    );
  }
}

export default App;
