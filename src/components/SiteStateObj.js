import React from "react";
import App from "../App";
import Nav from "./Nav";
import Footer from "./Footer";

class LoginCheck extends React.Component {
	constructor(props) {
		super(props);
		let cookies = document.cookie;
		let login = "";
		let user = { _id: "", username: "", posts: [] };

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
			_id: user._id,
			username: user.username,
			posts: user.posts,
			token: login,
		};

		this.updateLogin = this.updateLogin.bind(this);
		this.addPost = this.addPost.bind(this);
	}

	addPost() {
		this.setState((prevState) => {
			return { posts: prevState.posts + 1 };
		});
	}

	updateLogin(logInfo) {
		let user = logInfo;

		this.setState(() => {
			if (user) {
				return { ...user, loggedIn: true };
			} else {
				return {
					loggedIn: false,
					_id: "",
					username: "",
					posts: [],
					token: "",
				};
			}
		});
	}

	render() {
		console.log(this.state);
		return (
			<div>
				<Nav loggedIn={this.state.loggedIn} />
				<App
					updateLogin={this.updateLogin}
					user={this.state}
					addPost={this.addPost}
				/>
				<Footer loggedIn={this.state.loggedIn} />
			</div>
		);
	}
}

export default LoginCheck;
