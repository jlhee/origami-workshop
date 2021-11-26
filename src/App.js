import "./App.css";
import { Route, Routes } from "react-router-dom";
import Aside from "./components/Aside";
import Main from "./components/Main";
import Input from "./components/Input";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Error from "./components/Error";
// let apiURL = "http://localhost:9999/";
// import logo from './logo.svg';

function App(props) {
	return (
		<div className="App Container">
			<Aside loggedIn={props.user.loggedIn} />
			<Routes>
				<Route path="/" exact element={<Main />} />
				<Route path="/post" element={<Input />} />
				<Route path="/register" element={<Register />} />
				<Route
					path="/login"
					element={<Login updateLogin={props.updateLogin} />}
				/>
				<Route
					path="/profile"
					element={
						<Profile
							updateLogin={props.updateLogin}
							username={props.user.username}
							numPosts={props.user.posts}
						/>
					}
				/>
				<Route path="*" element={<Error />} />
			</Routes>
		</div>
	);
}

export default App;
