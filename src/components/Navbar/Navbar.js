import React, { Component } from "react";
import "./Navbar.css";
class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className='navbar'>
				<ul>
					<li>Test</li>
					<li>Test</li>
					<li>Test</li>
				</ul>
			</div>
		);
	}
}
export default Navbar;
