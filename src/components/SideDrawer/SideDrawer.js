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
    </nav>
  );
};
export default sideDrawer;
