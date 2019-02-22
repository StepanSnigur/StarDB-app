import React from 'react';
import { Redirect } from 'react-router-dom';

const LoginPage = ({ isLoggedIn, onLogin }) => {
    if (isLoggedIn) {
        return <Redirect to="/secret" />
    } else {
        return (
            <div>
                <h2>Login to secret page</h2>
                <button onClick={onLogin}>Login</button>
            </div>
        );
    }
}

export default LoginPage;