import Posts from "./Posts";

function Input() {
	return (
		<div className="Input">
			<div>
				<h1>Share your thoughts...</h1>
				<textarea></textarea>
				<button>Post</button>
			</div>

			<div>
				<h2>Last 3 posts on your wall</h2>
				<Posts limit="3" />
			</div>
		</div>
	);
}

export default Input;
