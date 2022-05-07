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
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/recovery">Recovery Password</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}

export default Layout;