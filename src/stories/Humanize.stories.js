import React from "react";
import { storiesOf } from "@storybook/react";

import { Humanize } from "../components/Humanize";

// Play with it using command: yarn storybook

export default {
	title: "Humanize",
	component: Humanize
}

export const App = () => {
	return (
		<span>
			<Humanize value={123456789} base={1000} decimals={2} displaySizes={true} />{"B"}
		</span>
	)
}
