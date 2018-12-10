import React from 'react';
import Customers from './Customers';

const UserGreeting = (props) => {
    return <h1>Bienvenido nuevamente!</h1>;
  }
  
  function GuestGreeting(props) {
    return <h1>Por favor ingrese.</h1>;
  }

  function Greeting({isLoggedIn}) {
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }

function LoginButton(props) {
    return (
      <button onClick={props.onClick}>
        Login
      </button>
    );
  }
  
  function LogoutButton(props) {
    return (
      <button onClick={props.onClick}>
        Logout
      </button>
    );
  }

class LoginControl extends React.Component {
    constructor(props) {
      super(props);
      
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.state = {isLoggedIn: false};
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
        button = <LogoutButton onClick={this.handleLogoutClick} />;
      } else {
        button = <LoginButton onClick={this.handleLoginClick} />;
      }
      
      const getClassName = isLoggedIn => isLoggedIn ? 'log' : 'unlog';

      return (
        <div className={getClassName(isLoggedIn)}>
          <Greeting isLoggedIn={isLoggedIn} />
          {button}
          {
            isLoggedIn && <Customers></Customers>
          }
        </div>
      );
    }
  }

  export default LoginControl;