import React, { Component, Redirect } from "react";
import { withRouter } from "react-router";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBar: "",
      results: []
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
        console.log(item);
      }
    });
  };
  componentDidUpdate(prevProps, prevState) {
    const { history } = this.props;
    if (prevState.results !== this.state.results) {
      history.push("/SearchResults");
    }
  }
  render() {
    return (
      <form className='homepage-searchbar' onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='searchBar'
          onChange={this.handleInputChange}
        ></input>
        <button type='submit'>Seach</button>
      </form>
    );
  }
}
export default Search;
