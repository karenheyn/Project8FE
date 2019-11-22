import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";

storiesOf("Button", module)
  .add("Submit", () => <Button label="Submit" type="submit" />)
  .add("Submit", () => <Button label="Edit" type="edit" />)
  .add("Submit-hover", () => <Button label="Submit" type="submit" hover />)
  .add("Search", () => <Button label="Search" type="search" search />);
