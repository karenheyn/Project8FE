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
    return (
      <div className="rest-detail-box-container">
        <div className="detail-overlay"></div>
        <div className="rest-detail-container">
          <div className="rest-image-container">
            <img
              className="rest-image-picture"
              src={this.props.imageUrl}
              alt="whoops"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default RestaurantDetail;
