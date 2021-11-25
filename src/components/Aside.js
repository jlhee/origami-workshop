import React from "react";
import { Link } from "react-router-dom";
import links from "../data/routes.json";
import ListItem from "./ListItem";

class Aside extends React.Component {
	render() {
		return (
			<aside className="Aside">
				<ul>
					{links.map((link) => {
						return <ListItem location={link} />;
					})}
				</ul>
			</aside>
		);
	}
}
export default Aside;
