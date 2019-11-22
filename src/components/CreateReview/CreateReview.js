import React, { Component } from "react";
import Form from "../../stories/Forms/Forms";
import "./CreateReview.css";

class CreateReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentData: data,
      name: "",
      review: "",
      rating: 0
    };

    getReviewData = data => {
      this.setState({ currentData: data });
    };
  }

  render() {
    return (
      <Form
        type="comment"
        name="name"
        label="Name"
        comment
        getReviewData={this.getReviewData.bind(this)}
      />
    );
  }
}

export default CreateReview;
