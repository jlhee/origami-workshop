import React from "react";
import Post from "./Post";
import posts from "../data/posts.json";

class Posts extends React.Component {
	// TODO: fetch the first 8-9 posts to get the links to the pages
	// TODO: auto limit the number of posts from the fetch helper rather than from here in the component
	render() {
		let limit = this.props.limit;

		if (limit !== undefined) {
			limit = Number(limit);
		}

		return (
			<div className="Posts">
				{posts.map((post, index) => {
					if (!limit || index < limit) {
						return (
							<Post
								description={post.description}
								author={post.author}
							/>
						);
					}
				})}
			</div>
		);
	}
}
export default Posts;
