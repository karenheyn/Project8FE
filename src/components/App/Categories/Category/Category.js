import React, { Component } from "react";

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
    console.log(this.state.data);
    return (
      <div>
        <h1>poopidoopieshmoopie</h1>
      </div>
    );
  }
}

export default Brands;
