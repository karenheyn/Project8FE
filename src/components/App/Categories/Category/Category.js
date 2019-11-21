import React, { Component } from "react";
import RestaurantImageBox from "../../../RestaurantImageBox/RestaurantImageBox";
import "./Category.css";
const baseurl =
  "https://dc-100-restaurants-db.herokuapp.com/restaurants/category/";

class Brands extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    const type = this.props.match.params.restaurants;
    const url = `${baseurl}${type}`;
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({ data: res });
      });
  }
  render() {
    const data = [];
    console.log(this.state.data);
    this.state.data.map(item => data.push(item));
    return (
      <div className='wrapper-div'>
        {data.map(item => {
          return (
            <div className='padding-control'>
              <RestaurantImageBox data={item} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Brands;
