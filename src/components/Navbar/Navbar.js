import React from "react";
// import { faburger } from "@fortawesome/free-solid-svg-icons";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.css";
import { library } from "@fortawesome/fontawesome-svg-core";
// library.add(faburger);
const Navbar = props => (
	<header className='navbar'>
		<nav className='navbar-navigation'>
			<div>
				<DrawerToggleButton click={props.drawerClickHandler} />
			</div>
			<div className='logo'>
				<FontAwesomeIcon icon='hamburger' />
				<a href='/'>
					<span className='bold'>D</span>eli<span className='bold'>C</span>ious
				</a>
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
