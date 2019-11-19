import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchBar: ""
		};
	}
	handleChange = e => {
		e.preventDefault();
		this.setState({ [e.target.name]: e.target.value });
	};
	handleSubmit = e => {
		e.preventDefault();
	};
	render() {
		return (
			<div className='homepage'>
				<h1>Home Page</h1>
				<form className='homepage-searchbar' onSubmit={this.handleSubmit}>
					<input
						type='text'
						name='searchBar'
						onChange={this.handleChange}
					></input>
					<button type='submit'>Seach</button>
				</form>
				<div className='slider'>
					<img src='https://via.placeholder.com/800x350' alt='placeholder' />
				</div>
				<div className='most-reviewed-title'>
					<h2>5 most reviewed resteraunts</h2>
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
}
export default Home;
