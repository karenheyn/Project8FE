import React, { Component } from "react";
import "./RestaurantImageBox.css";

class RestaurantImageBox extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.data);
  }

  render() {
    return (
      <div className='restaurant-image-container'>
        <h1 className='rest-image-name'>{this.props.data.name}</h1>
        <a href={this.props.yelpUrl}>
          <img
            src={this.props.data.imageUrl}
            alt='whoops'
            className='rest-image'
          />
        </a>
      </div>
    );
  }
}

export default RestaurantImageBox;
