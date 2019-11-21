import React, { Component } from "react";
import "./Review.css";

class Review extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return <div className="review-box-container"></div>;
  }
}

export default Review;
