import React, { Component } from "react";
import "./Home.css";
let url = "https://dc-100-restaurants-db.herokuapp.com/restaurants";

class Home extends Component {
	constructor(props) {
		super(props);
		console.log(this.props.data);
		this.state = {
			searchBar: "",
			data: []
		};
	}
	componentDidMount() {
		fetch(url)
			.then(res => res.json())

			.then(res => {
				// console.log(res);
				this.setState({ data: res, isLoading: false });
			})
			.catch(err => {
				console.error(err);
			});
	}
	handleChange = e => {
		e.preventDefault();
		this.setState({ [e.target.name]: e.target.value });
	};
	handleSubmit = e => {
		e.preventDefault();
	};

	componentDidMount() {
		console.log(this.props.data);
		let arrayOfNames = [];

		this.props.data.map(({ name }) => {
			arrayOfNames.push(name);
			return;
		});
		this.setState({ data: arrayOfNames });
	}

	render() {
		console.log(this.state.data);
		if (!this.state.loading) {
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
		return <div>Loading</div>;
	}
}
export default Home;
