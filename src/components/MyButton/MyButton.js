import React from "react";
import { Button } from "reactstrap";

export const MyButton = (props) => {
	return(<Button {...props}>{props.value ? props.value : "Ahoj, jak se mas?"}</Button>)
}