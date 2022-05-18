import React, {useState, useContext} from "react";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import AppContext from "../context/AppContext";
import './../styles/header.scss';
import MyOrderDetails from "../containers/MyOrderDetails";
import { Link } from "react-router-dom";

const Header = () => {
	const liStyle = {textDecoration: 'none'};
	//Handle menus
	const [toggleDesktop, setToggleDesktop] =useState(false);
	const [toggleMobile, setToggleMobile] = useState(false);
	const [toggleMyOrder, setToggleMyOrder] = useState(false);
	const handleToggleDesktop = () => {
		setToggleDesktop(!toggleDesktop);
		setToggleMobile(false);
	};
	const handleToggleMobile = () => {
		setToggleMobile(!toggleMobile);
		setToggleDesktop(false);
	};
	const handleToggleMyOrder = () => {
		setToggleMyOrder(!toggleMyOrder);
	}
	//Handle items inside cart
	const { state } = useContext(AppContext);
	//User state
	const useUser = {email: null}

    return(
        <nav>
			<div className="navbar-left">
				<Link to="/"><img src="./assets/logos/logo_yard_sale.svg" alt="menu" className="menu" /></Link>
				<figure onClick={handleToggleMobile}>
					<img src="./assets/icons/icon_menu.svg" alt="celphone icon" className="menu-icon"/>
				</figure>
				{toggleMobile && <MobileMenu />}
			</div>
			<div className="navbar-center">
				<img src="./assets/logos/logo_yard_sale.svg" alt="logo" className="logo" />
				<ul>
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
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					{useUser.email === null ? <Link style={liStyle} to="/loginPage"><li className="navbar-email"> Login </li></Link> : <li className="navbar-email" onClick={handleToggleDesktop}>{useUser.email}</li>}
					
					<li className="navbar-shopping-cart">
						<img src="./assets/icons/icon_shopping_cart.svg" alt="shopping cart" onClick={handleToggleMyOrder} />
						{toggleMyOrder && <MyOrderDetails />}
						{state.cart.length > 0 ? <div className="cart-counter">{state.cart.length}</div> : null}
					</li>
				</ul>
			</div>
			{toggleDesktop && <DesktopMenu />}
		</nav>
    );
}

export default Header;