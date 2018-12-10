import React, { Component } from 'react';
import './App.css';
import MainPage from './components/MainPage';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <h1 className="title">React</h1>
        <MainPage />
      </div>
    );
  }
}

export default App;
