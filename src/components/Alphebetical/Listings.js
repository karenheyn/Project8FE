import React, { Component } from "react";
import { Link } from "react-router-dom";
import RestaurantImageBox from "../RestaurantImageBox/RestaurantImageBox";
class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      filteredcuisineArray: []
    };
  }
  render() {
    console.log(this.props.data);
    const myData = this.props.data.sort(function(a, b) {
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      return 0;
    });
    console.log(myData);
    return (
      <div>
        {/* {this.props.data.map((item, i) => {
          return <RestaurantImageBox key={i} data={item} />;
        })} */}
      </div>
    );
  }
}

export default Categories;
