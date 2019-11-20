import React from "react";
import { storiesOf } from "@storybook/react";
import Form from "./Forms";
import { tsPropertySignature } from "@babel/types";

storiesOf("Form", module)
	.add("Search", () => (
		<Form type='search' input='form' label='Search' search />
	))
	.add("Comment", () => (
		<Form type='comment' name='name' label='Name' comment />
	));
