import React, {useContext} from "react";
import '../styles/myAccount.scss';
import UserContext from "../context/UserContext";

const MyAccount = () => {
    const { user } = useContext(UserContext);
    return (
        <div className="login">
            <div className="form-container">
                <h1 className="title">My account</h1>
                <form action="/" className="form">
                    <div>
                        <label htmlFor="name" className="label">Name</label>
                        <p className="value">{user.name}</p>
                        <label htmlFor="email" className="label">Email</label>
                        <p className="value">{user.email}</p>
                        <label htmlFor="password" className="label">Password</label>
                        <p className="value">*********</p>
                    </div>
                    <input type="submit" value="Edit" className="secondary-button login-button" />
                </form>
            </div>
        </div>
    );
};

export default MyAccount;