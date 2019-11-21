import React, { Component, Redirect } from "react";
import Results from "../SearchResults/SearchResults";
class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchBar: "",
			results: [],
			submitted: false
		};
	}
	handleInputChange = e => {
		e.preventDefault();
		this.setState({ searchBar: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.data.map(item => {
			if (
				item.name.toLowerCase().includes(this.state.searchBar) ||
				item.categories[0].toLowerCase().includes(this.state.searchBar)
			) {
				return this.state.results.push(item);
			}
		});
		this.setState({ submitted: true });
	};
	render() {
		if (this.state.submitted) {
			return <Results results={this.state.results} />;
		}
		return (
			<div>
				<form className='homepage-searchbar' onSubmit={this.handleSubmit}>
					<input
						type='text'
						name='searchBar'
						onChange={this.handleInputChange}
					></input>
					<button type='submit'>Seach</button>
				</form>
			</div>
		);
	}
}

export default Search;
