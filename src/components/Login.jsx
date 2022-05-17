import React, { useRef } from 'react';
import './../styles/login.scss';
import { Link } from "react-router-dom";

const Login = () => {
    const liStyle = {textDecoration: 'none', color: 'inherit'};
    const form = useRef(null);
    console.log(form)

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            email: formData.get('email'),
            password: formData.get('password')
        }
        console.log(data);
    };

    return(
        <div className="login">
            <div className="form-container">
                <form action="/" className="form" ref={form}>
                    <label htmlFor="email" className="label">Email address</label>
                    <input type="text" name="email" placeholder="platzi@example.cm" className="input input-email" />
                    <label htmlFor="password" className="label">Password</label>
                    <input type="password" name="password" placeholder="*********" className="input input-password" />
                    <button type="submit" onClick={handleSubmit} className="primary-button login-button">
                        Log In
                    </button>
                    <a href="/"><Link style={liStyle} to="/recovery">Forgot my password</Link></a>
                </form>

                <button className="secondary-button signup-button"><Link style={liStyle} to="/createAccount">Sing Up</Link></button>
            </div>
        </div>
    );
};

export default Login;