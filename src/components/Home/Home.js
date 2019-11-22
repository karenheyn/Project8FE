import React, { Component } from "react";
import "./Home.css";
import Carousel from "./Carousel/Carousel";
import Searchbar from "../Search/Search";
import { array, arrayOf } from "prop-types";
import RestaurantImageBox from "../../components/RestaurantImageBox/RestaurantImageBox";
import Restaurant from "../Restaurant/Restaurant";
import RestaurantDetail from "../RestaurantDetail/RestaurantDetail";
import Form from "../../stories/Forms/Forms";
import SearchResults from "../SearchResults/SearchResults";
let namesArray = [];
class Home extends Component {
  constructor(props) {
    super(props);

    // console.log(this.props.data);
    this.state = {
      data: this.props.data,
      renderDetails: false,
      currentData: {} //for getClickedRestaurantData - tyler
    };
    // this.handleInputChange = this.handleInputChange.bind(this);
  }

  /**
   * getClickedRestaurantData returns the data from a restaurant that is clicked
   * -Tyler
   */
  getClickedRestaurantData = data => {
    // console.log(data);
    this.setState({ currentData: data, renderDetails: true });
  };
  closeClickedRestaurantDetails = doClose => {
    if (doClose) {
      this.setState({ renderDetails: false });
    }
  };

  render() {
    console.log(this.state.currentData);
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
        <div className='homepage'>
          <h1>search</h1>
          <div className='search'>
            <Searchbar data={arrayOfData} />
          </div>
          <div className='slider'>
            <Carousel className='carousel' data={arrayOfData}></Carousel>
          </div>

          <div className='top-rated-rests'>
            {arrayOfData.slice(50, 55).map(item => {
              return (
                <RestaurantImageBox
                  data={item}
                  key={item.name}
                  getClickedRestaurantData={this.getClickedRestaurantData.bind(
                    this
                  )}
                />
              );
            })}
          </div>
          {this.state.renderDetails ? (
            <RestaurantDetail
              currentData={this.state.currentData}
              closeClickedRestaurantDetails={this.closeClickedRestaurantDetails.bind(
                this
              )}
            />
          ) : null}
        </div>
      );
    }
    return <div>Loading</div>;
  }
}
export default Home;
