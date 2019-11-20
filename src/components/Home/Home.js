import React, { Component } from "react";
import "./Home.css";
import Carousel from "./Carousel/Carousel";
// import TopFive from "../TopFiveListings/TopFiveListings";
import { array, arrayOf } from "prop-types";
import RestaurantImageBox from "../../components/RestaurantImageBox/RestaurantImageBox";
import Restaurant from "../Restaurant/Restaurant";
import RestaurantDetail from "../RestaurantDetail/RestaurantDetail";

class Home extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props.data);
    this.state = {
      searchBar: "",
      data: this.props.data,
      results: [],
      renderDetails: false
    };
  }
  handleInputChange = e => {
    e.preventDefault();
    this.setState({ searchBar: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    let i;
    this.props.data.map(item => {
      if (
        item.name.toLowerCase().includes(this.state.searchBar) ||
        item.categories[0].toLowerCase().includes(this.state.searchBar)
      ) {
        console.log(item);
      }
      return item;
    });
  };
  componentDidUpdate(prevProps, prevState) {
    const { history } = this.props;
    if (prevState.results !== this.state.results) {
      history.push("/SearchResults");
    }
  }
  render() {
    let arrayOfData = [];
    this.props.data.map(item => {
      arrayOfData.push(item);
      return item;
    });
    let ratings = [];
    arrayOfData.map(item => {
      if (item.rating > 4.6) {
        ratings.push(item);
      }
      return item;
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

          <div className='top-rated-rests'>
            {arrayOfData.slice(0, 5).map(item => {
              return (
                <RestaurantImageBox
                  key={item.yelpUrl}
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
