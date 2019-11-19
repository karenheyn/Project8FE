import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
	constructor(props) {
		super(props);
		// console.log(this.props.data);
		this.state = {
			searchBar: "",
			data: this.props.data
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
		let arrayOfData = [];
		this.props.data.map(item => {
			arrayOfData.push(item);
		});
		console.log(arrayOfData);
		if (!arrayOfData.length < 1) {
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
