function logoutHelper() {
	let headers = {
		method: "POST",
		credentials: "same-origin",
		headers: {
			"Content-Type": "application/json",
		},
	};
	return fetch("http://localhost:9999/api/user/logout", headers).then(
		(res) => {
			console.log(res.status);
			return res.json();
		}
	);
}

export default logoutHelper;
