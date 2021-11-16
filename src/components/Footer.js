import React from "react";
import links from "../data/data.json";
import Link from "./Link";

class Footer extends React.Component {
	render() {
		return (
			<footer className="Footer">
				<ul>
					{links.map((link) => {
						return <Link key={link} url={link} location={link} />;
					})}
					<li className="listItem">
						<img
							src="./img/blue-origami-bird.png"
							alt="Origami logo"
						/>
					</li>
				</ul>
				<p>Awesome Junior Devs</p>
			</footer>
		);
	}
}

export default Footer;
