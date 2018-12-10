import React, {Component} from 'react';
import './App.css';
import MainPage from './components/MainPage';
import {data} from './data';

class App extends Component {

    constructor(props) {
      super(props);
      this.search = React.createRef();
    }
    state = {
        search: '',
        data: data
    };

    componentDidMount() {
      //this.search.current.focus();
    }
    
    onChangeSearch = e => {
        this.setState({
            search: e.currentTarget.value,
            data: data.filter(d => d.name.toLowerCase().includes(e.currentTarget.value.toLowerCase()))
        });
    }

    render() {
        return (
            <div className="App">
                <h1 className="title">React</h1>
                <span>Búsqueda</span>
                <input ref={this.search} type="text" value={this.state.search} onChange={this.onChangeSearch}/>
                <MainPage data={this.state.data}/>
            </div>
        );
    }
}

export default App;
