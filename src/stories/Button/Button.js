import React from "react";
import "./Button.css";
import Search from "../icons/search";

const Button = props => {
  let classList = "";
  let types = ["submit", "search"];
  if (types.includes(props.type)) {
    classList += ` button-${props.type}`;
  }
  if (props.hover) {
    classList += ` button-${props.type}-hover`;
  }
  if (props.search) {
    classList += ` button-${props.type}`;
    return (
      <button className={classList}>
        <Search />
        {props.label}
      </button>
    );
  }
  return <button className={classList}>{props.label}</button>;
};
export default Button;
