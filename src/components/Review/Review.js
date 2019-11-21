import React, { Component } from "react";
import "./Review.css";

class Review extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
  }

  render() {
    return (
      <div className="review-box-container">
        <h1 className="restaurant-review-name">Bill Reviewman</h1>
        <h1 className="restaurant-review-rating">3/5</h1>
        <h4 className="restaurant-review-content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
          laborum, itaque, a laudantium ipsam mollitia in dolorum cumque magnam
          sint enim alias quaerat reiciendis tempora at provident aperiam quo
          odio.
        </h4>
      </div>
    );
  }
}

export default Review;
