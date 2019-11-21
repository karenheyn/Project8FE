import React, { Component } from "react";
import "./SearchResults.css";
import RestaurantImageBox from "../RestaurantImageBox/RestaurantImageBox";
import "../RestaurantImageBox/RestaurantImageBox.css";

class SearchResults extends Component {
	constructor(props) {
		super(props);
		this.state = {
			passedData: this.props.location.state.results
		};
	}

	render() {
		let dataResults = [];
		this.state.passedData.map(item => {
			dataResults.push(item);
		});
		console.log(dataResults);
		return (
			<div>
				{dataResults.map(item => {
					return (
						<div className='result-restaurant'>
							<RestaurantImageBox data={item} />
						</div>
					);
				})}
			</div>
		);
	}
}

export default SearchResults;
