import React, { Component } from "react";
import "./CreateReview.css";

class CreateReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      review: "",
      rating: 0
    };
  }
}

export default CreateReview;
