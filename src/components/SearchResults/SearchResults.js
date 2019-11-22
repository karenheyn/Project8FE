import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SearchResults.css";
import RestaurantImageBox from "../RestaurantImageBox/RestaurantImageBox";
import RestaurantDetail from "../RestaurantDetail/RestaurantDetail";
import "../RestaurantImageBox/RestaurantImageBox.css";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passedData: this.props.location.state.results,
      renderDetails: false,
      currentData: {} //for getClickedRestaurantData - tyler
    };
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
    let dataResults = [];
    this.state.passedData.map(item => {
      dataResults.push(item);
    });
    console.log(dataResults);
    return (
      <div className="results-main">
        {dataResults.map(item => {
          return (
            <div className="result-restaurant">
              <RestaurantImageBox
                key={item.name}
                data={item}
                getClickedRestaurantData={this.getClickedRestaurantData.bind(
                  this
                )}
              />

              <div className="result-information">
                <div className="result-category">
                  <h3>Category:</h3>
                  <span>{item.categories[0]}</span>
                </div>
                <div className="result-address">
                  <div className="result-street">
                    <h3>Location:</h3>
                    <span>{item.location.address}</span>
                  </div>
                  <div className="result-city">
                    <span>{item.location.city}</span>
                  </div>
                </div>
                <div className="result-rating">
                  <h3>Rating:</h3>
                  <span>{item.rating}</span>
                </div>
              </div>
            </div>
          );
        })}
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
}

export default SearchResults;
