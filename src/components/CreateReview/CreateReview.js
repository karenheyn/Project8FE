import React, { Component } from "react";
import Form from "../../stories/Forms/Forms";
import "./CreateReview.css";
import axios from "axios";

class CreateReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantId: this.props.restaurantId,
      name: "",
      rating: 0,
      review: ""
    };
    console.log(this.state.restaurantId);
  }
  getReviewData = data => {
    this.setState({ currentData: data });
  };
  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });

    console.log(this.state.name);
    console.log(this.state.review);
    console.log(this.state.rating);
  };
  submitHandler = event => {
    event.preventDefault();
    console.log(this.state);
    axios
      .post(
        "https://dc-100-restaurants-db.herokuapp.com/reviews/create/",
        this.state
      )

      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <Form
        type="comment"
        name={this.state.name}
        review={this.state.review}
        rating={this.state.rating}
        label="Name"
        comment
        getReviewData={this.getReviewData.bind(this)}
        changeHandler={this.changeHandler.bind(this)}
        submitHandler={this.submitHandler.bind(this)}
      />
    );
  }
}

export default CreateReview;
