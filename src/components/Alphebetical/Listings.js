import React, { Component } from "react";
import { Link } from "react-router-dom";
import RestaurantImageBox from "../RestaurantImageBox/RestaurantImageBox";
import RestaurantDetail from "../RestaurantDetail/RestaurantDetail";
import "../App/Categories/Category/Category.css";
class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      filteredcuisineArray: [],
      renderDetails: false,
      currentData: {}, //for getClickedRestaurantData - tyler
    };
  }

  /**
   * getClickedRestaurantData returns the data from a restaurant that is clicked
   * -Tyler
   */
  getClickedRestaurantData = (data) => {
    // console.log(data);
    this.setState({ currentData: data, renderDetails: true });
  };
  closeClickedRestaurantDetails = (doClose) => {
    if (doClose) {
      this.setState({ renderDetails: false });
    }
  };

  render() {
    console.log(this.props.data);
    const myData = this.props.data.sort(function (a, b) {
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      return 0;
    });
    console.log(myData);
    return (
      <div className='wrapper-div'>
        {myData.map((item, i) => {
          return (
            <div key={i} className='padding-control'>
              <RestaurantImageBox
                data={item}
                getClickedRestaurantData={this.getClickedRestaurantData.bind(
                  this
                )}
              />
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

export default Categories;
