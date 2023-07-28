import React, {useState} from "react";
import { storiesOf } from "@storybook/react";

import { MyButton } from "../components/MyButton";

// Story about testing the functionality of my custom component
// play with it using command: yarn storybook

export default {
	title: "App test",
	component: MyButton
}

// TODO: video about howto set up story https://www.youtube.com/watch?v=hf6Z8OZanec

export const App = () => {
	const [index, setIndex] = useState(0);

	const arrayOfStrings = ["blab", "zlab", "popop", "dodob", "momo"];

	 // returns a random int value to use as an index
	const randomIndex = (arr) => {
		return Math.floor(Math.random() * arr.length)
	}

	return (
		<MyButton onClick={() => setIndex(randomIndex(arrayOfStrings))} value={arrayOfStrings[index]} />
	)
}

