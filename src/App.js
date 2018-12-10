import React, { Component } from 'react';
import './App.css';
import LoginControl from './LoginControl';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <h1 className="title">Clase 1</h1>
        <LoginControl></LoginControl>
      </div>
    );
  }
}

export default App;
