import React from "react";
import { storiesOf } from "@storybook/react";
import Form from "./Forms";

storiesOf("Form", module)
  .add("Search", () => <Form type='search' input='form' label='Search' />)
  .add("Comment", () => <Form type='comment' name='name' label='Name' />);
