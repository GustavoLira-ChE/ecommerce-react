import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return(
        <div className="Layout">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/loginPage">Login</Link>
                    </li>
                    <li>
                        <Link to="/recovery">Recovery Password</Link>
                    </li>
                    <li>
                        <Link to="/recoveryVerification">Recovery Password Verification</Link>
                    </li>
                    <li>
                        <Link to="/createAccount">Create Account</Link>
                    </li>
                    <li>
                        <Link to="/myAccount">My Account</Link>
                    </li>
                    <li>
                        <Link to="/myorder">My Order</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}

export default Layout;