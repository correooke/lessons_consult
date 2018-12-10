import React from 'react';
import Customers from './Customers';
import LogoutButton from './components/LogoutButton';
import LoginButton from './components/LoginButton';
import Greeting from './components/Greeting';

class LoginControl extends React.Component {
    constructor(props) {
        super(props);

        this.handleLoginClick = this
            .handleLoginClick
            .bind(this);
        this.handleLogoutClick = this
            .handleLogoutClick
            .bind(this);
        this.state = {
            isLoggedIn: false
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
                {isLoggedIn && <Customers></Customers>
}
            </div>
        );
    }
}

export default LoginControl;