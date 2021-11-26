import Post from "./Post";
import posts from "../data/posts.json";

function Profile(props) {
	return (
		<div className="Profile">
			<img src="./img/profile.png" alt="profile-icon" />
			<div className="personal-info">
				<p>
					<span>Username: </span>
					{props.username}
				</p>
				<p>
					<span>Posts: </span>
					{props.numPosts}
				</p>
				<button
					onClick={() => {
						// logout fetch
					}}
				>
					Logout
				</button>
			</div>

			<div>
				<h2>3 of your recent posts</h2>
				{posts.slice(-3).map((post, index) => {
					return (
						<Post
							key={index}
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
