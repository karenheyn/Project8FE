import React, { Component } from "react";
import "./RestaurantDetail.css";
import "../Backdrop/Backdrop";
import Backdrop from "../Backdrop/Backdrop";

class RestaurantDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props.data[0]);
    return (
      <div className="rest-detail-box-container">
        <div className="detail-overlay"></div>
        <div className="rest-detail-container">
          <div className="rest-image-container">
            <img
              className="rest-image-picture"
              src={this.props.data[0].imageUrl}
              alt="whoops"
            />
          </div>
          <div className="rest-details-data">
            <h1 className="rest-data-name">{this.props.data[0].name}</h1>
            <h3 className="rest-data-location">
              {`${this.props.data[0].location.address}, 
                ${this.props.data[0].location.city}`}
            </h3>
            <h3>Categories:</h3>
            {this.props.data[0].categories.map(item => {
              return <h3>{item}</h3>;
            })}
            <a href={this.props.data[0].yelpUrl}>Yelp Url</a>
            <h4>Phone Number: {this.props.data[0].phone}</h4>
            <h5>Rating: {this.props.data[0].rating}</h5>
            <h1>REVIEWS WILL HOPEFULLY GO DOWN HERE</h1>
          </div>
        </div>
      </div>
    );
  }
}
export default RestaurantDetail;
