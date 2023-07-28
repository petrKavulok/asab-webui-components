import React, {useState} from "react";
import { storiesOf } from "@storybook/react";

import { Spinner } from "../components/Spinner";

// Play with it using command: yarn storybook

export default {
	title: "Spinner",
	component: Spinner
}

export const App = () => {
	return (
		<Spinner />
	)
}
