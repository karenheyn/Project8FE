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
            <a href='/'>Lorem</a>
          </li>
          <li>
            <a href='/'>Ipsum</a>
          </li>
          <li>
            <a href='/'>Lorem</a>
          </li>
          <li>
            <a href='/'>Ipsum</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);
export default Navbar;
