import React from "react";
import App from "../App";
import Nav from "./Nav";
import Footer from "./Footer";

class LoginCheck extends React.Component {
	constructor(props) {
		super(props);
		let cookies = document.cookie;
		console.log(cookies);
		let login = "";
		let user = { username: "", posts: 0 };

		if (cookies) {
			cookies = cookies.split("; ");
			login = cookies
				.find((cookie) => {
					return cookie.includes("x-auth-token");
				})
				.split("=")[1];
			user = JSON.parse(
				cookies
					.find((cookie) => {
						return cookie.includes("user");
					})
					.split("=")[1]
			);
			// console.log(login);
			// console.log(user);
		}
		this.state = {
			loggedIn: login ? true : false,
			username: user.username,
			posts: user.posts,
			token: login,
		};

		this.updateLogin = this.updateLogin.bind(this);
	}
	updateLogin(logInfo) {
		let user = logInfo;

		this.setState(() => {
			return user;
			// if (!user) {
			// 	return {
			// 		loggedIn: false,
			// 		username: null,
			// 		posts: null,
			// 		token: null,
			// 	};
			// } else {
			// 	return { ...user, loggedIn: true };
			// }

			// if (user) {
			// 	return {
			// 		loggedIn: user.loggedIn ? true : false,
			// 		username: user.username,
			// 		posts: user.posts,
			// 		token: user.loggedIn,
			// 	};
			// } else {
			// 	return {
			// 		loggedIn: false,
			// 		username: "",
			// 		posts: 0,
			// 		token: "",
			// 	};
			// }
		});
	}

	render() {
		console.log(this.state);
		return (
			<div>
				<Nav loggedIn={this.state.loggedIn} />
				<App user={this.state} updateLogin={this.updateLogin} />
				<Footer loggedIn={this.state.loggedIn} />
			</div>
		);
	}
}

export default LoginCheck;
