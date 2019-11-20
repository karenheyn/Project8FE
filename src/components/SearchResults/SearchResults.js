import React, { Component } from "react";
import "./SearchResults.css";
import axios from "axios";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultsData: {}
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://dc-100-restaurants-db.herokuapp.com/restaurants/name/${this.props.search}`
      )
      .then(res => res.data)
      .then(res => {
        this.setState({ resultsData: res });
      });
  }

  render() {
    const {
      imageUrl,
      name,
      catagories,
      address,
      city,
      phone,
      rating
    } = this.state.resultsData;

    // if (!Poster || Poster === "N/A") {
    //   return null;
    // }

    return (
      <div className='card-container'>
        <div className='image-container'>
          <div
            className='bg-image'
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
        </div>
        <div className='result-info'>
          <h2>Movie Details</h2>
          <div>
            <h1>{name}</h1>
            <small>Cuisine: {catagories}</small>
          </div>
          <h4>Rating: {rating} / 5</h4>
          <p>
            {address} {city}
          </p>
          <div className='tags-container'>{phone}</div>
        </div>
      </div>
    );
  }
}
export default SearchResults;
