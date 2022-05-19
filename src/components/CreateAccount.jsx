import React, { useRef, useContext } from "react";
import './../styles/createAccount.scss';
import UserContext from "../context/UserContext";

const CreateAccount = () => {
    const { newUserRegistration } = useContext(UserContext); 
    const form = useRef(null);
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password'),
        }
        newUserRegistration(data);
    }

    return(
        <div className="login">
            <div className="form-container">
                <h1 className="title">My account</h1>
                <form action="/" className="form" ref={form}>
                    <div>
                    <label htmlFor="name" className="label">Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Bruno" 
                        className="input input-name" />
                    <label htmlFor="email" className="label">Email</label>
                    <input 
                        type="text" 
                        name="email" 
                        placeholder="correo@example.com" 
                        className="input input-email" />
                    <label htmlFor="password" className="label">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="*********" 
                        className="input input-password" />
                    </div>
                    <input type="submit" value="Create" className="primary-button login-button" onClick={handleSubmit}/>
                </form>
            </div>
        </div>
    );
};

export default CreateAccount;