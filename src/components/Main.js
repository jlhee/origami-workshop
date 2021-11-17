import React from "react";
import Posts from "./Posts";

class Main extends React.Component {
	render() {
		return (
			<main className="Main">
				<h1>Publications</h1>
				<Posts />
			</main>
		);
	}
}
export default Main;
