import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Form from "../../stories/Forms/Forms";
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
		this.setState({ searchBar: e.target.value.toLowerCase() });
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
			return (
				<Redirect
					to={{
						pathname: "/results",
						state: { results: this.state.results }
					}}
				/>
			);
		}
		return (
			<div className='search'>
				{/* <Form
          type='search'
          input='form'
          name='searchBar'
          label='Search'
          search
          onChange={this.handleInputChange}
        /> */}
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
