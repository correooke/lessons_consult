import React from 'react';
import Customers from './Customers';
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';
import Greeting from './Greeting';

class MainPage extends React.Component {

    state = { isLoggedIn: false };
    
    constructor(props) {
        super(props);

        this.handleLoginClick = this
            .handleLoginClick
            .bind(this);
        this.handleLogoutClick = this
            .handleLogoutClick
            .bind(this);
        this.state = {
            isLoggedIn: false,
            time: new Date(),
        };
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick}/>;
        } else {
            button = <LoginButton onClick={this.handleLoginClick}/>;
        }

        const getClassName = isLoggedIn => isLoggedIn
            ? 'log'
            : 'unlog';

        return (
            <div className={getClassName(isLoggedIn)}>
                <Greeting isLoggedIn={isLoggedIn}/> {button}
                {isLoggedIn && <Customers data={this.props.data}></Customers>
}
            </div>
        );
    }
}

export default MainPage;