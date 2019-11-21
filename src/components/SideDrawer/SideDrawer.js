import React from "react";
import "./SideDrawer.css";
import { Link } from "react-router-dom";
const sideDrawer = props => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <div className='profile-img'>
        <img
          src='https://via.placeholder.com/150'
          alt='placeholder for profile'
        />
        <p>lorem ipsum</p>
      </div>
      <ul>
        <Link to='/cuisine'>
          <li>Cuisine</li>
        </Link>

        <Link to='/listings'>
          <li>Listings</li>
        </Link>
        <li>
          <a href='/'>Lorem</a>
        </li>
        <Link to='/About'>
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
};
export default sideDrawer;
