import React, {useState, useContext} from "react";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import AppContext from "../context/AppContext";
import './../styles/header.scss';
import MyOrderDetails from "../containers/MyOrderDetails";

const Header = () => {
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

    return(
        <nav>
			<div className="navbar-left">
				<img src="./assets/logos/logo_yard_sale.svg" alt="menu" className="menu" />
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
					<li className="navbar-email" onClick={handleToggleDesktop}>platzi@example.com</li>
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