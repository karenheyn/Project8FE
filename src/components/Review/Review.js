import React, { Component } from "react";
import Button from "../../stories/Button/Button";
import "./Review.css";
import "../../stories/Button/Button.css";
import CreateReview from "../CreateReview/CreateReview";
class Review extends Component {
  constructor(props) {
    super(props);
    console.log(props.reviewProps.id);
    this.state = {
      edit: false
    };
  }

  startEdit = () => {
    this.setState({ edit: true });
    console.log("start edit");
  };
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
        <div className="review-button-container">
          <Button
            label="Edit"
            type="edit"
            onMouseDown={this.startEdit.bind(this)}
          />
        </div>
        {this.state.edit ? (
          <CreateReview
            restaurantId={this.props.currentData.data._id}
            afterCreate={this.getAllData}
            editing={true}
            thisReviewsId={this.props.reviewProps.id}
          />
        ) : null}
      </div>
    );
  }
}

export default Review;
