import React from "react";
import Post from "./Post";
import getPosts from "../helpers/getUserPosts";
// import posts from "../data/posts.json";

// function getPosts(limit = 0, user = "") {
// 	let url = "http://localhost:9999/api/origami/";
// 	let userUrl = "http://localhost:9999/api/user/";
// 	return fetch(url)
// 		.then((res) => {
// 			return res.json();
// 		})
// 		.then((data) => {
// 			return fetch(userUrl)
// 				.then((res) => res.json())
// 				.then((users) => {
// 					let posts = data.map((post) => {
// 						let author = users.find((user) => {
// 							return user._id === post.author;
// 						});
// 						return {
// 							id: post._id,
// 							author: author.username,
// 							description: post.description,
// 						};
// 					});

// 					if (limit) {
// 						posts.reverse();
// 					}
// 					return posts;
// 				});
// 		});
// }

class Posts extends React.Component {
	// TODO: fetch the first 8-9 posts to get the links to the pages
	// TODO: auto limit the number of posts from the fetch helper rather than from here in the component
	constructor(props) {
		super(props);
		this.state = {
			posts: [],
		};
		this.addPosts = (data) => {
			this.setState(() => {
				return {
					posts: data,
				};
			});
		};
		// this.addPosts = this.addPosts.bind(this);
	}

	componentDidMount() {
		getPosts(this.props.limit, this.props.author).then((data) => {
			this.addPosts(data);
		});
	}

	render() {
		let { posts } = this.state;
		return (
			<div className="Posts">
				{posts.map((post) => {
					return (
						<Post
							key={post._id}
							description={post.description}
							author={post.author}
						/>
					);
				})}
			</div>
		);
	}
}
export default Posts;
