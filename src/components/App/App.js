import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "../Home/Home";
import SearchResults from "../SearchResults/SearchResults";
import Restaurant from "../Restaurant/Restaurant";
import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className='main-container'>
				<nav>
					<Navbar />
				</nav>
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
