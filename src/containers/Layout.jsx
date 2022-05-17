import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return(
        <div className="Layout">
            <nav>
                <ul>
                    <li>
                        <Link to="/recoveryVerification">Recovery Password Verification</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}

export default Layout;