import React, { Component } from "react";
import "./Home.css";
import Carousel from "./Carousel/Carousel";
import Searchbar from "../Search/Search";
import { array, arrayOf } from "prop-types";
import RestaurantImageBox from "../../components/RestaurantImageBox/RestaurantImageBox";
import Restaurant from "../Restaurant/Restaurant";
import RestaurantDetail from "../RestaurantDetail/RestaurantDetail";

import SearchResults from "../SearchResults/SearchResults";
let namesArray = [];
class Home extends Component {
  constructor(props) {
    super(props);

    // console.log(this.props.data);
    this.state = {
      data: this.props.data,
      renderDetails: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  render() {
    const { results } = this.state;
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
        <div className="homepage">
          <h1>Home Page</h1>
          <Searchbar data={arrayOfData} />
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
          {this.state.renderDetails ? (
            <RestaurantDetail data={arrayOfData} />
          ) : null}
        </div>
      );
    }
    return <div>Loading</div>;
  }
}
export default Home;
