import React from "react";

class Register extends React.Component {
	render() {
		return (
			<div className="Register">
				<h1>Register Page</h1>
				<form>
					<div className="form-control">
						<label>Email</label>
						<input type="email" />
					</div>
					<div className="form-control">
						<label>Password</label>
						<input type="password" />
					</div>
					<div className="form-control">
						<label>Re-password</label>
						<input type="password" />
					</div>
					<div className="form-control">
						<button type="submit">Register</button>
					</div>
				</form>
			</div>
		);
	}
}
export default Register;
