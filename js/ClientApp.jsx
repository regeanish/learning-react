import React from "react";
import { render } from "react-dom";

const ce = React.createElement;

const MyTitle = function(props) {
	return ce("div", null, ce("h1", { style: { color: props.color } }, props.title));
};
const MyFirstComponent = function() {
	return ce(
		"div",
		{ id: "my-first-component", color: "yellow" },
		ce(MyTitle, { title: "Game of thrones", color: "green" }),
		ce(MyTitle, { title: "House of cards", color: "blue" }),
		ce(MyTitle, { title: "Friends", color: "red" })
	);
};

render(ce(MyFirstComponent), document.getElementById("app"));
