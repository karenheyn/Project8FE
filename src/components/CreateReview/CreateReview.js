import React, { Component } from "react";
import Form from "../../stories/Forms/Forms";
import "./CreateReview.css";
import axios from "axios";

class CreateReview extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props.deleting);
    this.state = {
      restaurantId: this.props.restaurantId,
      name: "",
      rating: 0,
      review: "",
      reviewSubmitted: false,
      reviewId: "",
      editReviewId: this.props.thisReviewsId
    };
    // console.log(this.state.editReviewId);
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

  deleteHandler = () => {
    if (this.props.deleting && !this.props.editing) {
      console.log("hellooooooo");
      axios
        .delete(
          `https://dc-100-restaurants-db.herokuapp.com/reviews/delete/${this.state.editReviewId}`,
          this.state
        )
        .then(response => {
          //   console.log(response);
          this.setState({
            reviewSubmitted: true,
            reviewId: response.data._id
          });
          this.props.afterCreate();
          this.props.finishDelete();
        })
        .catch(error => {
          console.log(error);
        });
    }
  };
  submitHandler = event => {
    event.preventDefault();
    // console.log(this.state);
    if (!this.props.editing && !this.props.deleting) {
      axios
        .post(
          "https://dc-100-restaurants-db.herokuapp.com/reviews/create/",
          this.state
        )

        .then(response => {
          //   console.log(response.data._id);
          this.setState({ reviewSubmitted: true, reviewId: response.data._id });
          //   console.log(this.state.reviewId);
          this.props.getReviewId(response.data._id);
          this.props.afterCreate();
        })
        .catch(error => {
          console.log(error);
        });
    } else if (this.props.editing && !this.props.deleting) {
      axios
        .put(
          `https://dc-100-restaurants-db.herokuapp.com/reviews/update/${this.state.editReviewId}`,
          this.state
        )
        .then(response => {
          //   console.log(response);
          this.setState({
            reviewSubmitted: true,
            reviewId: response.data._id
          });
          this.props.afterCreate();
          this.props.finishEdit();
          this.props.getReviewId(response.data._id);
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  render() {
    this.deleteHandler();
    if (!this.state.reviewSubmitted && !this.props.deleting) {
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
    } else if (this.state.reviewSubmitted && !this.props.deleting) {
      const h1Color = {
        color: "rgb(201, 172, 8)",
        textAlign: "center"
      };
      return <h1 style={h1Color}>Review Submitted!</h1>;
    } else if (this.props.deleting) {
      return null;
    }
  }
}

export default CreateReview;
