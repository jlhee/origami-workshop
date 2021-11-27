// import Post from "./Post";
import Posts from "./Posts";
// import getPosts from "../helpers/getUserPosts";
// import posts from "../data/posts.json";
import logoutHelper from "../helpers/logoutHelper";

// function logout() {
// 	let headers = {
// 		method: "POST",
// 		headers: {
// 			"Content-Type": "application/json",
// 			// "Authorization": "..."
// 		},
// 	};
// 	return fetch("http://localhost:9999/api/user/logout", headers).then(
// 		(res) => {
// 			console.log(res.status);
// 			return res.json();
// 		}
// 	);
// }

function Profile(props) {
	// let userPosts = await getPosts();

	// console.log(userPosts);

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
						// let cookies = document.cookie.split("; ");
						// let token = cookies.find((cookie) => {
						// 	return cookie.includes("x-auth-token");
						// });
						// .split("=")[1];
						// console.log(token);
						// let headers = {
						// 	method: "POST",
						// 	headers: {
						// 		"Content-Type": "application/json",
						// 	},
						// };
						// return fetch(
						// 	"http://localhost:9999/api/user/logout",
						// 	headers
						// )
						logoutHelper().then((data) => {
							console.log(data);
							document.cookie =
								"x-auth-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
							document.cookie =
								"user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
							props.updateLogin({
								loggedIn: false,
								username: "",
								posts: 0,
								token: "",
							});
						});
					}}
					type="button"
				>
					Logout
				</button>
			</div>

			<div>
				<h2>3 of your recent posts</h2>
				<Posts limit={3} author={props.username} />
				{/* {posts.map((post) => {
					return (
						<Post
							key={post._id}
							description={post.description}
							author={post.author}
						/>
					);
				})} */}
				{/* {getPosts().then((data) => {
					return data.map((post) => {
						return (
							<Post
								key={post._id}
								description={post.description}
								author={post.author}
							/>
						);
					});
				})} */}
			</div>
		</div>
	);
}

export default Profile;
