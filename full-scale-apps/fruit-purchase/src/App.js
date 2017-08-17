import React, { Component } from 'react';
import FruitSales from './FruitSales'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
      var fruit = [
          {name: 'Banana', price: 5},
          {name: 'Apple', price: 2},
          {name: 'Orange', price: 8},
          {name: 'Watermelon', price: 10}
      ];
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Fruit Purchase Page</h2>
        </div>
          <FruitSales items={fruit}/>
      </div>
    );
  }
}

export default App;
