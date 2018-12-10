import React from 'react';

const LoginButton = React.forwardRef(({
    onClick
}, ref) => (
    <button ref={ref} onClick={onClick}>
        Login
    </button>
));

export default LoginButton;