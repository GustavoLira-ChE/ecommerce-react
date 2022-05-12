import React, {useState} from "react";
import DesktopMenu from "./DesktopMenu";
import './../styles/header.scss'

const Header = () => {
	const [toggle, setToggle] =useState(false);
	const handleToggle = () => {
		setToggle(!toggle);
	};
    return(
        <nav>
			<div className="navbar-left">
				<img src="./assets/logos/logo_yard_sale.svg" alt="menu" className="menu" />
				<img src="./assets/icons/icon_menu.svg" alt="celphone icon" className="menu-icon"/>
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
					<li className="navbar-email" onClick={handleToggle}>platzi@example.com</li>
					<li className="navbar-shopping-cart">
						<img src="./assets/icons/icon_shopping_cart.svg" alt="shopping cart" />
						<div>2</div>
					</li>
				</ul>
			</div>
			{toggle && <DesktopMenu />}
		</nav>
    );
}

export default Header;