import React, { Component } from "react";
import "./RestaurantImageBox.css";

class RestaurantImageBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='restaurant-image-container'>
        <h1 className='rest-image-name'>{this.props.data.name}</h1>

        <img
          src={this.props.data.imageUrl}
          alt='whoops'
          className='rest-image'
          onMouseDown={() => this.props.getClickedRestaurantData(this.props)}
        />
      </div>
    );
  }
}

export default RestaurantImageBox;
