import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <h2>Login Page</h2>
            <button>Google Sing-in</button>
            <br />
            <Link to="/register">New user?</Link>
        </div>
    );
};

export default Login;