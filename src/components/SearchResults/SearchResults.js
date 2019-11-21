import React, { Component } from "react";
import "./SearchResults.css";
import axios from "axios";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <h1>Results</h1>
      </div>
    );
  }
}
export default SearchResults;
