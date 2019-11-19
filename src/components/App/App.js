import React, { Component } from "react";
import { Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import SideDrawer from "../SideDrawer/SideDrawer";
import Backdrop from "../Backdrop/Backdrop";
import Home from "../Home/Home";
import SearchResults from "../SearchResults/SearchResults";
import Restaurant from "../Restaurant/Restaurant";
import "./App.css";

class App extends Component {
	state = {
		sideDrawerOpen: false
	};
	drawerToggleClickHandler = () => {
		this.setState(prevState => {
			return { sideDrawerOpen: !prevState.sideDrawerOpen };
		});
	};
	backdropClickHandler = () => {
		this.setState({ sideDrawerOpen: false });
	};
	render() {
		let backdrop;

		if (this.state.sideDrawerOpen) {
			backdrop = <Backdrop click={this.backdropClickHandler} />;
		}
		return (
			<div className='main-container'>
				<Navbar drawerClickHandler={this.drawerToggleClickHandler} />
				<SideDrawer show={this.state.sideDrawerOpen} />
				{backdrop}
				<main>
					<Route path='/' exact component={Home} />
					<Route path='/searchresults' component={SearchResults} />
					<Route path='/:restaurant' component={Restaurant} />
				</main>
			</div>
		);
	}
}

export default App;
