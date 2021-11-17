import Post from "./Post";
import posts from "../data/posts.json";

function Profile(props) {
	return (
		<div className="Profile">
			<img src="./img/profile.png" alt="profile-icon" />
			<div className="personal-info">
				<p>
					<span>Email:</span>
					{props.email}
				</p>
				<p>
					<span>Posts:</span>
					{props.numPosts}
				</p>
			</div>

			<div>
				<h2>3 of your recent posts</h2>
				{posts.slice(-3).map((post) => {
					return (
						<Post
							description={post.description}
							author={post.author}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Profile;
