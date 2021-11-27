function loginHelper(state) {
	let headers = {
		method: "POST",
		credentials: "same-origin",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(state),
	};
	return fetch("http://localhost:9999/api/user/login", headers).then(
		(res) => {
			console.log(res.status);
			return res.json();
		}
	);
}

export default loginHelper;
