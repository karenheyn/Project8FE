import React, { Component } from "react";
import { Link } from "react-router-dom";
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
			<div className='results-main'>
				{dataResults.map(item => {
					return (
						<div className='result-restaurant'>
							<Link to='/resteraunts/:name'>
								<RestaurantImageBox data={item} />
							</Link>
							<div className='result-information'>
								<div className='result-category'>
									<h3>Category:</h3>
									<span>{item.categories[0]}</span>
								</div>
								<div className='result-address'>
									<div className='result-street'>
										<h3>Location:</h3>
										<span>{item.location.address}</span>
									</div>
									<div className='result-city'>
										<span>{item.location.city}</span>
									</div>
								</div>
								<div className='result-rating'>
									<h3>Rating:</h3>
									<span>{item.rating}</span>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}

export default SearchResults;
