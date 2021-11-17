import React from "react";
import { Link } from "react-router-dom";
import links from "../data/data.json";
import ListItem from "./ListItem";

class Footer extends React.Component {
	render() {
		return (
			<footer className="Footer">
				<ul>
					{links.map((link) => {
						return <ListItem location={link} />;
					})}

					<li className="listItem">
						<Link to="/">
							<img
								src="./img/blue-origami-bird.png"
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
