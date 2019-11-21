import React, { Component } from "react";
import { withRouter } from "react-router";
import "./SearchResults.css";
import axios from "axios";

class SearchResults extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		console.log(this.props);
		return (
			<div>
				<h1>Results</h1>
			</div>
		);
	}
}

export default SearchResults;
