import React from "react";
import { Link } from "react-router-dom";
import links from "../data/routes.json";
import ListItem from "./ListItem";

class Nav extends React.Component {
	// TODO: fetch first 11 posts to get links to pages
	// constructor(props) {
	// 	super(props);
	// 	this.links = links.filter((link) => {
	// 		if (this.props.loggedIn) {
	// 			return link.type === "private";
	// 		} else {
	// 			return link.type === "public";
	// 		}
	// 	});
	// }

	render() {
		// let cookieValue = document.cookie.split("=")[1];
		// let loggedIn = cookieValue ? true : false;
		// console.log(loggedIn);
		return (
			<nav className="Navigation" style={{ position: "fixed" }}>
				<ul>
					<li className="listItem">
						<Link to="/">
							<img
								src="./img/white-origami-bird.png"
								alt="Origami logo"
							/>
						</Link>
					</li>

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
			</nav>
		);
	}
}
export default Nav;
