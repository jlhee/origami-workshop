import React from "react";
import Post from "./Post";
import posts from "../data/posts.json";

class Posts extends React.Component {
	render() {
		return (
			<div className="Posts">
				{posts.map((post) => {
					return <Post text={post.text} author={post.author} />;
				})}
			</div>
		);
	}
}
export default Posts;
