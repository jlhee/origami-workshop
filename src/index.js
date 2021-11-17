import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

// TODO: data make state & variable data for user login and tracking
// TODO: cookies?
// TODO: create helpers for the fetch API calls

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Nav />
			<App />
			<Footer />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
