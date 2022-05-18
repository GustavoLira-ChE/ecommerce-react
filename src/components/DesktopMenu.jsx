import React, { useContext} from "react";
import { Link } from "react-router-dom";
import '../styles/desktopMenu.scss';
import UserContext from "../context/UserContext";

const DesktopMenu = () => {
    const { userLogout } = useContext(UserContext);
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
                    <a href="/" onClick={userLogout}>Sign out</a>
                </li>
            </ul>
        </div>
    );
};

export default DesktopMenu;