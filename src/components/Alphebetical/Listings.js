import React, { Component } from "react";
import RestaurantImageBox from "../../../RestaurantImageBox/RestaurantImageBox";
import "./Category.css";
import RestaurantDetail from "../../../RestaurantDetail/RestaurantDetail";
const baseurl =
  "https://dc-100-restaurants-db.herokuapp.com/restaurants/category/";

class Brands extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      renderDetails: false,
      currentData: {} //for getClickedRestaurantData - tyler
    };
  }
  componentDidMount() {
    const type = this.props.match.params.restaurants;
    const url = `${baseurl}${type}`;
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({ data: res });
      });
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
    const data = [];
    console.log(this.state.data);
    this.state.data.map(item => data.push(item));
    return (
      <div className='wrapper-div'>
        {data.map(item => {
          return (
            <div className='padding-control'>
              <RestaurantImageBox
                key={item.name}
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

export default Brands;
