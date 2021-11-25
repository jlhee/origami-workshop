import React from "react";

class LoginCheck extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loggedIn: false,
		};
	}
	render() {
		return <div>{this.props.children}</div>;
	}
}

export default LoginCheck;
