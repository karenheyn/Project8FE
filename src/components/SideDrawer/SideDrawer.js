import React from "react";
import "./SideDrawer.css";
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
		</nav>
	);
};
export default sideDrawer;
