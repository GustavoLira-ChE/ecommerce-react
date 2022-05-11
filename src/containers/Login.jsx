import React from 'react';
import './../styles/login.scss';

const Login = () => {
    return(
        <div className="login">
            <div className="form-container">
                <img src="./assets/logos/logo_yard_sale.svg" alt="logo" className="logo" />
                <h1 className="title"></h1>
                <p className="subtitle">Login to EcommerceReact</p>
                <form action="/" className="form">
                    <label for="password" className="label">Email</label>
                    <input type="password" id="password" placeholder="user@email.xyz" className="input input-password" />
                    <label for="new-password" className="label">Password</label>
                    <input type="password" id="new-password" placeholder="*********" className="input input-password" />
                    <input type="submit" value="Login" className="primary-button login-button" />
                </form>
            </div>
        </div>
    );
}

export default Login;