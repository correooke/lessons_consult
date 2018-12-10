import React, { Component } from 'react';

class UserGreeting extends Component {

    
    state = { useTime: new Date(), count: 0, count2: 0 };
 

    componentDidMount() {
        this.interval = setInterval(() => {
            //this.setState(({ count }) => ({ useTime: new Date(), count: count + 1 }));
        }, 1000);
        this.interval = setInterval(() => {
            this.setState(({ count }) => ({ count: count + 1 }));
            this.setState({ count2: this.state.count2 + 1 });
        }, 1);        
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <>
                <h1>¡Bienvenido nuevamente!</h1>
                <p>Tiempo usado: {this.state.useTime.toLocaleTimeString() }</p>
                <p>Segundos: {this.state.count} s.</p>
                <p>Segundos 2: {this.state.count2} s.</p>
            </>
        );
    }
}

export default UserGreeting;
