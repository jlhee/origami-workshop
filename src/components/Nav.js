import React from "react";
import { Link } from "react-router-dom";
import links from "../data/routes.json";
import ListItem from "./ListItem";

class Nav extends React.Component {
	// TODO: fetch first 11 posts to get links to pages
	render() {
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

					{links.map((link) => {
						return <ListItem location={link} />;
					})}
				</ul>
			</nav>
		);
	}
}
export default Nav;
