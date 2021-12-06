import React from "react";
import Posts from "./Posts";

function sendPost(description, userID) {
	let url = "http://localhost:9999/api/origami/";
	let data = {
		description,
		author: userID,
	};
	let headers = {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(data),
	};
	console.log("userID: " + userID);
	console.log(description);
	return fetch(url, headers).then((res) => {
		return res.json();
	});
}

class Input extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			post: "",
		};
		this.user = this.props.user;
		this.changeHandler = this.changeHandler.bind(this);
		this.submitHandler = this.submitHandler.bind(this);
	}

	changeHandler(event) {
		this.setState({ post: event.target.value });
	}

	submitHandler(event) {
		sendPost(this.state.post, this.user._id).then((data) => {
			this.props.addPost();
		});
		event.preventDefault();
	}

	render() {
		return (
			<div className="Input">
				<div>
					<h1>Share your thoughts...</h1>
					<form onSubmit={this.submitHandler}>
						<textarea
							name="post"
							type="text"
							onChange={this.changeHandler}
						></textarea>
						<button type="submit">Post</button>
					</form>
				</div>

				<div>
					<h2>Last 3 posts on your wall</h2>
					<Posts limit={3} author={this.props.user.username} />
				</div>
			</div>
		);
	}
}

export default Input;
