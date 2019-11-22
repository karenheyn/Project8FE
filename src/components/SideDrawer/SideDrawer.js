import React from "react";
import "./SideDrawer.css";
import { Link } from "react-router-dom";
import Plate from "../../assets/plate.png";
const sideDrawer = props => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  let imgClasses = "round-img";
  if (props.show) {
    imgClasses = "round-img-go";
  }
  return (
    <nav className={drawerClasses}>
      <div className='profile-img'>
        <a className='image-link' href='/'>
          <img
            className={imgClasses}
            src={Plate}
            alt='placeholder for profile'
          />
        </a>
        <p className='menu'>Menu</p>
      </div>
      <ul className='nav-list'>
        <Link to='/cuisine' style={{ textDecoration: "none" }}>
          <li className='menu-link'>Cuisine</li>
        </Link>

        <Link to='/listings' style={{ textDecoration: "none" }}>
          <li className='menu-link'>Restaurants</li>
        </Link>
        <Link to='/Contact' style={{ textDecoration: "none" }}>
          <li className='menu-link'>Contact</li>
        </Link>
        <Link to='/About' style={{ textDecoration: "none" }}>
          <li className='menu-link'>About</li>
        </Link>
      </ul>
    </nav>
  );
};
export default sideDrawer;
