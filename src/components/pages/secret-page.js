import React from 'react';
import { Redirect } from 'react-router-dom';

const SecretPage = ({ isLoggedIn }) => {
    if (isLoggedIn) {
        return (
            <h2>This is secret page</h2>
        );
    } else {
        return <Redirect to="/login" />
    }
}

export default SecretPage;