import React, { Component } from "react";
import "./Categories.css";
import { Link } from "react-router-dom";
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
    console.log(this.props.data[0]);
    const cuisineArray = [];
    const cuisineArrayOfArrays = [];
    this.props.data.map(item => cuisineArrayOfArrays.push(item.categories));
    console.log(cuisineArrayOfArrays);
    cuisineArrayOfArrays.map(array =>
      array.map(item => {
        cuisineArray.push(item);
        return item;
      })
    );
    console.log(cuisineArray);
    let noDupesArray = [...new Set(cuisineArray)];
    console.log(noDupesArray);
    return (
      <div className='cat-container'>
        {noDupesArray.map(item => {
          return (
            <div key={item} className='cat-title-box'>
              <Link
                to={`/cuisine/${item}`}
                className='item'
                style={{ textDecoration: "none" }}
              >
                <p className='words' key={item}>
                  {item}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Categories;
