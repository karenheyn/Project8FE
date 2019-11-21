import React from "react";
import "./Forms.css";
import Button from "../Button/Button";

const Form = props => {
  let classList = "";
  let types = ["search", "comment"];
  let input = "";
  if (types.includes(props.type)) {
    classList += ` form-${props.type}`;
  }
  if (props.search) {
    return (
      <form className={props.className + classList} onSubmit={props.onSubmit}>
        <input
          className={props.input}
          placeholder={props.label}
          onChange={props.onChange}
        ></input>
        <Button classList="search" type="search" search></Button>
      </form>
    );
  }
  if (props.comment) {
    return (
      <form className={classList}>
        <input className={props.name} placeholder="name"></input>
        <div className="rating-div">
          <label for="rating">rating:</label>
          <select className="rating">
            <option value="1">1</option>
            <option value="1.5">1.5</option>
            <option value="2">2</option>
            <option value="2.5">2.5</option>
            <option value="3">3</option>
            <option value="3.5">3.5</option>
            <option value="4">4</option>
            <option value="4.5">4.5</option>
            <option value="5">5</option>
          </select>
        </div>
        <textarea className="review" placeholder="write your review"></textarea>

        <Button label="Submit" type="sumbit"></Button>
      </form>
    );
  }
};
export default Form;
