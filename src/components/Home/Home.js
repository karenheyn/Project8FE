import React, { Component } from "react";
import "./Home.css";
import Carousel from "./Carousel/Carousel";
import TopFive from "../TopFiveListings/TopFiveListings";

class Home extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props.data);
    this.state = {
      searchBar: "",
      data: this.props.data,
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
      if (item.name.includes(this.state.searchBar)) {
        console.log(item);
      }
      return item;
    });
  };
  render() {
    let arrayOfData = [];
    this.props.data.map(item => {
      arrayOfData.push(item);
    });
    let ratings = [];
    arrayOfData.map(item => {
      if (item.rating > 4.6) {
        ratings.push(item);
      }
    });
    // console.log(arrayOfData);
    if (!arrayOfData.length < 1) {
      return (
        <div className='homepage'>
          <h1>Home Page</h1>
          <form className='homepage-searchbar' onSubmit={this.handleSubmit}>
            <input
              type='text'
              name='searchBar'
              onChange={this.handleInputChange}
            ></input>
            <button type='submit'>Seach</button>
          </form>
          <div className='slider'>
            <Carousel className='carousel' data={arrayOfData}></Carousel>
          </div>
          <div className='most-reviewed-title'>
            <h2>{arrayOfData[9].name}</h2>
          </div>
          <div className='most-reviewed'>
            <TopFive data={ratings} />
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
