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
      edit: false,
      deleting: false
    };
  }

  startEdit = () => {
    this.setState({ edit: true });
    console.log("start edit");
  };

  finishEdit = () => {
    this.setState({ edit: false });
    console.log("edit complete");
  };

  startDelete = () => {
    this.setState({ deleting: true });
    console.log("start delete");
  };
  finishDelete = () => {
    this.setState({ deleting: false });
    console.log("delete complete");
  };

  deleteReview = () => {
    return "true";
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
            onMouseDownEdit={this.startEdit.bind(this)}
          />
        </div>
        <div className="delete-button-container">
          <Button
            label="Delete"
            type="delete"
            onMouseDownDelete={this.startDelete.bind(this)}
          />
        </div>
        {this.state.edit ? (
          <CreateReview
            restaurantId={this.props.currentData.data._id}
            afterCreate={this.props.afterCreate}
            editing={true}
            thisReviewsId={this.props.reviewProps.id}
            finishEdit={this.finishEdit.bind(this)}
          />
        ) : null}
        {this.state.deleting ? (
          <CreateReview
            restaurantId={this.props.currentData.data._id}
            afterCreate={this.props.afterCreate}
            deleting={true}
            thisReviewsId={this.props.reviewProps.id}
            finishDelete={this.finishDelete.bind(this)}
          />
        ) : null}
      </div>
    );
  }
}

export default Review;
