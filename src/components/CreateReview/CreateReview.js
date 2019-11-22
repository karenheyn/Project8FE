import React, { Component } from "react";
import Form from "../../stories/Forms/Forms";
import "./CreateReview.css";
import axios from "axios";

class CreateReview extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      restaurantId: this.props.restaurantId,
      name: "",
      rating: 0,
      review: "",
      reviewSubmitted: false,
      reviewId: "",
      editReviewId: this.props.thisReviewsId
    };
    console.log(this.state.editReviewId);
  }
  getReviewData = data => {
    this.setState({ currentData: data });
  };
  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });

    // console.log(this.state.name);
    // console.log(this.state.review);
    // console.log(this.state.rating);
  };
  submitHandler = event => {
    event.preventDefault();
    console.log(this.state);
    if (!this.props.editing) {
      axios
        .post(
          "https://dc-100-restaurants-db.herokuapp.com/reviews/create/",
          this.state
        )

        .then(response => {
          console.log(response.data._id);
          this.setState({ reviewSubmitted: true, reviewId: response.data._id });
          //   console.log(this.state.reviewId);
          this.props.getReviewId(response.data._id);
          this.props.afterCreate();
        })
        .catch(error => {
          console.log(error);
        });
    } else if (this.props.editing) {
    }
  };

  render() {
    if (!this.state.reviewSubmitted) {
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
          reviewId={this.state.reviewId}
        />
      );
    } else {
      const h1Color = {
        color: "rgb(201, 172, 8)",
        textAlign: "center"
      };
      return <h1 style={h1Color}>Review Submitted!</h1>;
    }
  }
}

export default CreateReview;
