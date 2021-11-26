import React from "react";
import App from "../App";
import Nav from "./Nav";
import Footer from "./Footer";

class LoginCheck extends React.Component {
	constructor(props) {
		super(props);
		let cookies = document.cookie.split("; ");
		let login, user;
		if (cookies.length) {
			login = cookies
				.find((cookie) => {
					return cookie.includes("token");
				})
				.split("=")[1];
			user = cookies
				.find((cookie) => {
					return cookie.includes("user");
				})
				.split("=")[1];
			console.log(login);
			console.log(user);
		}
		this.state = {
			loggedIn: false,
			username: "",
			posts: 0,
			token: "",
		};
		this.updateLogin = this.updateLogin.bind(this);
	}
	updateLogin(logInfo) {
		let user = logInfo;

		this.setState(() => {
			if (user) {
				// user = logInfo;
				return {
					loggedIn: user.loggedIn ? true : false,
					username: user.username,
					posts: user.posts,
					token: user.loggedIn,
				};
			} else {
				return {
					loggedIn: false,
					username: "",
					posts: 0,
					token: "",
				};
			}
		});
	}

	render() {
		// console.log(document.cookie.split("; "));
		return (
			<div>
				<Nav loggedIn={this.state.loggedIn} />
				<App
					user={this.state}
					// loggedIn={this.state.loggedIn}
					updateLogin={this.updateLogin}
				/>
				<Footer loggedIn={this.state.loggedIn} />
			</div>
		);
	}
}

export default LoginCheck;
