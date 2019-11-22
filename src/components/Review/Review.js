import React, { Component } from "react";
import "./Review.css";

class Review extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div className="review-box-container">
        <h1 className="restaurant-review-name">
          {this.props.reviewProps.reviewName}
        </h1>
        <h1 className="restaurant-review-rating">
          {this.props.reviewProps.reviewRating} / 5
        </h1>
        <h4 className="restaurant-review-content">
          {this.props.reviewProps.reviewContent}
        </h4>
      </div>
    );
  }
}

export default Review;
