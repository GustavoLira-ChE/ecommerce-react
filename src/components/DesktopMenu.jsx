import React from "react";
import { Outlet, Link } from "react-router-dom";
import '../styles/desktopMenu.scss';

const DesktopMenu = () => {
    return(
        <div className="desktop-menu">
            <ul>
                <li>
                    <Link to="/myorder">My Order</Link>
                </li>
                <li>
                    <Link to="/myAccount">My Account</Link>
                </li>
                <li>
                    <a href="/">Sign out</a>
                </li>
            </ul>
        </div>
    );
};

export default DesktopMenu;