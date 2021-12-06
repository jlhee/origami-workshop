function getPosts(limit = 0, user = "") {
	limit = Number(limit);
	let url = "http://localhost:9999/api/origami/";
	let userUrl = "http://localhost:9999/api/user/";
	return fetch(url)
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			return fetch(userUrl)
				.then((res) => {
					return res.json();
				})
				.then((users) => {
					let posts = data.map((post) => {
						let author = users.find((user) => {
							return user._id === post.author;
						});
						return {
							...post,
							author: author.username,
							authorID: author._id,
						};
					});
					return posts;
				})
				.then((posts) => {
					if (user) {
						posts = posts.filter((post) => {
							return post.author === user;
						});
					}
					if (limit) {
						posts = posts.reverse().slice(0, limit);
					}
					// console.log(posts);
					return posts;
				});
		});
}

export default getPosts;
