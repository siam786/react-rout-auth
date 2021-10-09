import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h2>Please Register</h2>
            <form>
                <input type="email" />
                <input type="password" />
                <br/>
                <input type="button" value="Submit" />
                <Link to="/login">Already Registered?</Link>
            </form>
        </div>
    );
};

export default Register;