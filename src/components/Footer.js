import React from "react";
import { Link } from "react-router-dom";
import links from "../data/routes.json";
import ListItem from "./ListItem";

class Footer extends React.Component {
	render() {
		return (
			<footer className="Footer">
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

					<li className="listItem">
						<Link to="/">
							<img
								src="./img/blue-origami-bird-flipped.png"
								alt="Origami logo"
							/>
						</Link>
					</li>
				</ul>
				<p>Awesome Junior Devs</p>
			</footer>
		);
	}
}

export default Footer;
