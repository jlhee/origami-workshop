import React from "react";
import links from "../data/data.json";
import Link from "./Link";

class Nav extends React.Component {
	// TODO: fetch first 11 posts to get links to pages
	render() {
		return (
			<nav className="Navigation" style={{ position: "fixed" }}>
				<ul>
					<li className="listItem">
						<a href="/home">
							<img
								src="./img/white-origami-bird.png"
								alt="Origami logo"
							/>
						</a>
					</li>
					{links.map((link) => {
						return <Link key={link} url={link} location={link} />;
					})}
				</ul>
			</nav>
		);
	}
}
export default Nav;
