import React from "react";
// import { Link } from "react-router-dom";
import links from "../data/routes.json";
import ListItem from "./ListItem";

class Aside extends React.Component {
	render() {
		return (
			<aside className="Aside">
				<ul>
					{links
						.filter((link) => {
							if (this.props.loggedIn) {
								return link.type === "private";
							} else {
								return link.type === "public";
							}
						})
						.map((link) => {
							return (
								<ListItem
									key={link.name}
									location={link.name}
								/>
							);
						})}
				</ul>
			</aside>
		);
	}
}
export default Aside;
