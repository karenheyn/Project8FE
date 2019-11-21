import React, { Component } from "react";
import { withRouter } from "react-router";
import "./SearchResults.css";
import axios from "axios";

class SearchResults extends Component {
	constructor(props) {
		super(props);
		this.state = {
			passedData: this.props.location.state.results
		};
	}

	render() {
		console.log(this.state.passedData);

		return (
			<div>
				<h1>THESE ARE THE FUCKING RESULTS!!!</h1>
			</div>
		);
	}
}

export default SearchResults;
