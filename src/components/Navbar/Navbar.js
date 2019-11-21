import React from "react";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./Navbar.css";
const Navbar = props => (
	<header className='navbar'>
		<nav className='navbar-navigation'>
			<div>
				<DrawerToggleButton click={props.drawerClickHandler} />
			</div>
			<div className='logo'>
				<a href='/'>Logo</a>
			</div>
			<div className='spacer' />
			<div className='nav-items'>
				<ul>
					<li>
						<a href='/'>Home</a>
					</li>
					<li>
						<a href='/about'>About</a>
					</li>
					<li>
						<a href='/contact'>Contact</a>
					</li>
				</ul>
			</div>
		</nav>
	</header>
);
export default Navbar;
