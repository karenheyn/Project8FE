import React, { Component } from "react";
import "./Home.css";
import Carousel from "./Carousel/Carousel";
import TopFive from "../TopFiveListings/TopFiveListings";
import { array, arrayOf } from "prop-types";
import RestaurantImageBox from "../../components/RestaurantImageBox/RestaurantImageBox";
import Restaurant from "../Restaurant/Restaurant";

class Home extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props.data);
    this.state = {
      searchBar: "",
      data: this.props.data
    };
  }
  handleInputChange = e => {
    e.preventDefault();
    this.setState({ searchBar: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
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
    // {
    // 	for (let i = 0; i < arrayOfData.length; i++)
    // 		if (arra);
    // }
    // console.log(arrayOfData);
    if (!arrayOfData.length < 1) {
      return (
        <div className="homepage">
          <h1>Home Page</h1>
          <form className="homepage-searchbar" onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="searchBar"
              onChange={this.handleChange}
            ></input>
            <button type="submit">Seach</button>
          </form>
          <div className="slider">
            <Carousel className="carousel" data={arrayOfData}></Carousel>
          </div>

          <div className="top-rated-rests">
            {arrayOfData.slice(0, 5).map(item => {
              return (
                <RestaurantImageBox
                  imageUrl={item.imageUrl}
                  name={item.name}
                  yelpUrl={item.yelpUrl}
                />
              );
            })}
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
