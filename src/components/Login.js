import React from "react";
import loginHelper from "../helpers/loginHelper";

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
		};
		this.changeHandler = this.changeHandler.bind(this);
		this.submitHandler = this.submitHandler.bind(this);
	}
	changeHandler(event) {
		if (event.target.name === "username") {
			this.setState({ username: event.target.value });
		} else if (event.target.name === "password") {
			this.setState({ password: event.target.value });
		}
	}
	submitHandler(event) {
		event.preventDefault();

		loginHelper(this.state).then((data) => {
			document.cookie = `x-auth-token=${data.token}`;
			document.cookie = `user={"username":"${data.user.username}", "posts": ${data.user.posts.length}}`;
			this.props.updateLogin({
				loggedIn: true,
				username: data.user.username,
				posts: data.user.posts.length,
				token: data.token,
			});
		});
		// add updateLogin function
		// save email & the # of posts from user
		//
	}

	render() {
		const { username, password } = this.state;
		return (
			<div className="Login">
				<h1>Login Page</h1>
				<form onSubmit={this.submitHandler}>
					<div className="form-control">
						<label htmlFor="username">Username</label>
						<input
							name="username"
							type="text"
							value={username}
							onChange={this.changeHandler}
						/>
					</div>
					<div className="form-control">
						<label htmlFor="password">Password</label>
						<input
							name="password"
							type="password"
							value={password}
							onChange={this.changeHandler}
						/>
					</div>
					<div className="form-control">
						<button type="submit">Login</button>
					</div>
				</form>
			</div>
		);
	}
}
export default Login;
