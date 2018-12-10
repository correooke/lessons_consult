import React from 'react';
import Customers from './Customers';
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';
import Greeting from './Greeting';

class MainPage extends React.Component {

    state = {
        isLoggedIn: false
    };

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

        this.loginButton = React.createRef();
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    componentDidMount() {
        this.loginButton.current && this
            .loginButton
            .current
            .focus();
    }

    componentDidUpdate(prevProps, prevState) {
        this.loginButton.current && this
            .loginButton
            .current
            .focus();
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick}/>;
        } else {
            button = <LoginButton ref={this.loginButton} onClick={this.handleLoginClick}/>;
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