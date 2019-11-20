import React, { Component } from "react";
import "./Home.css";
import Carousel from "./Carousel/Carousel";
import axios from "axios";
// I LIKE BIG BUTTS AND I CANNOT LIE!!!!!

import SearchResults from "../SearchResults/SearchResults";
let namesArray = [];
class Home extends Component {
  constructor(props) {
    super(props);

    // console.log(this.props.data);
    this.state = {
      searchBar: "",
      data: this.props.data,
      results: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  search = e => {
    e.preventDefault();
    axios
      .get(
        `https://dc-100-restaurants-db.herokuapp.com/restaurants/name/${this.state.searchBar}`
      )
      .then(res => res.data)
      .then(res => {
        if (!res.Search) {
          this.setState({ results: [] });
          return;
        }

        const results = res.Search.map(result => result.name);
        this.setState({
          results
        });
      });
  };
  handleInputChange = e => {
    e.preventDefault();
    this.setState({ searchBar: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { results } = this.state;
    let arrayOfData = [];
    this.props.data.map(item => {
      arrayOfData.push(item);
    });
    console.log(this.state.searchBar);
    console.log(arrayOfData);
    if (!arrayOfData.length < 1) {
      return (
        <div className='homepage'>
          <h1>Home Page</h1>
          <form className='homepage-searchbar' onSubmit={this.search}>
            <input
              type='text'
              name='searchBar'
              onChange={this.handleInputChange}
            ></input>
            <button type='submit'>Seach</button>
          </form>
          {results.length > 0 ? (
            results.map(result => (
              <SearchResults search={result} key={result} />
            ))
          ) : (
            <p>
              Couldn't find any result. Please search again using another search
              criteria.
            </p>
          )}
          <div className='slider'>
            <Carousel className='carousel' data={arrayOfData}></Carousel>
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
