import React, { Component } from "react";
import "./Home.css";
import Carousel from "./Carousel/Carousel";
import Form from "../../stories/Forms/Forms";
import _ from "lodash";

class Home extends Component {
	constructor(props) {
		super(props);
		console.log(this.props.data);
		this.state = {
			query: [],
			data: this.props.data
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSearch(e) {
		let queryData = [];
		if (e.target.value != "") {
			this.state.data.forEach(function(restaurant) {
				if (restaurant.toLowerCase().indexOf(e.target.value) != -1) {
					if (queryData.length < 100) {
						queryData.push(restaurant);
					}
				}
			});
		}
		this.setState({ query: queryData });
	}
	handleSubmit = e => {
		e.preventDefault();
	};
	render() {
		let arrayOfData = [];
		this.props.data.map(item => {
			arrayOfData.push(item);
		});
		console.log(arrayOfData);
		if (!arrayOfData.length < 1) {
			return (
				<div className='homepage'>
					<h1>Home Page</h1>
					<Form
						type='search'
						name='searchBar'
						input='homepage-searchbar'
						label='Search'
						onChange={this.handleSearch}
						onSubmit={this.handleSubmit}
						className='homepage-searchbar'
						search
					/>
					<div className='slider'>
						<Carousel></Carousel>
					</div>
					<div className='most-reviewed-title'>
						<h2>{arrayOfData[9].name}</h2>
					</div>
					<div className='most-reviewed'>
						<img src='https://via.placeholder.com/200' alt='placeholder' />
						<img src='https://via.placeholder.com/200' alt='placeholder' />
						<img src='https://via.placeholder.com/200' alt='placeholder' />
						<img src='https://via.placeholder.com/200' alt='placeholder' />
						<img src='https://via.placeholder.com/200' alt='placeholder' />
					</div>
				</div>
			);
		}
		return <div>Loading</div>;
	}
}
export default Home;
// componentDidMount() {
// 	console.log(this.props.data);
// 	let arrayOfNames = [];

// 	this.props.data.map(({ name }) => {
// 		arrayOfNames.push(name);
// 		return;
// 	});
// 	this.setState({ data: arrayOfNames });
// }
