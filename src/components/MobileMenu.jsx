import React, {useContext} from "react";
import { Link } from "react-router-dom";
import '../styles/mobileMenu.scss';
import UserContext from "../context/UserContext";

const MobileMenu = () => {
    const liStyle = {textDecoration: 'none'};
    //User state
	const { user } = useContext(UserContext);
    return(
        <div className="mobile-menu">
            <ul>
                <li>
                    <a href="/">CATEGORIES</a>
                </li>
                <li>
                    <a href="/">All</a>
                </li>
                <li>
                    <a href="/">Clothes</a>
                </li>
                <li>
                    <a href="/">Electronics</a>
                </li>
                <li>
                    <a href="/">Furnitures</a>
                </li>
                <li>
                    <a href="/">Toys</a>
                </li>
                <li>
                    <a href="/">Other</a>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="/myorder">My Order</Link>
                </li>
                <li>
                    <Link to="/myAccount">My Account</Link>
                </li>
            </ul>
            <ul>
                {user.email === null ? <Link style={liStyle} to="/loginPage"><li> Login </li></Link> : <li>{user.email}</li>}
                {user.email === null ? null : <li><a href="/" className="sign-out">Sign out</a></li>}  
            </ul>
        </div>
    );
};

export default MobileMenu;