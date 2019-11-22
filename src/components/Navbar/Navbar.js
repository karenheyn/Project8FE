import React from "react";
import { faHamburger, faPizzaSlice } from "@fortawesome/free-solid-svg-icons";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.css";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faHamburger, faPizzaSlice);
const Navbar = props => (
  <header className='navbar'>
    <nav className='navbar-navigation'>
      <div>
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className='logo'>
        <FontAwesomeIcon icon={["fa", "hamburger"]} />
        <a href='/'>
          <span className='bold-one'>D</span>eli
          <span className='bold-two'>C</span>ious
        </a>
        <FontAwesomeIcon icon={["fa", "pizza-slice"]} />
      </div>
      <div className='spacer' />
      <div className='nav-items'>
        {/* <ul>
					<li>
						<a href='/'>Home</a>
					</li>
					<li>
						<a href='/about'>About</a>
					</li>
					<li>
						<a href='/contact'>Contact</a>
					</li>
				</ul> */}
      </div>
    </nav>
  </header>
);
export default Navbar;
