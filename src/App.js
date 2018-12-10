import React, {Component} from 'react';
import './App.css';
import MainPage from './components/MainPage';
import {data} from './data';

class App extends Component {

    render() {
        return (
            <div className="App">
                <h1 className="title">React</h1>
                <MainPage data={data}/>
            </div>
        );
    }
}

export default App;
