import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

const App = () => {
	const [pic, setPic] = useState("");
	const [date, setDate] = useState(27);

	useEffect(() => {
		axios
			.get(
				"https://api.nasa.gov/planetary/apod?api_key=1pcDkqzVYtHxKLA4wapP50L4SSlkVyr5cyikedG3&date=2019-08-" +
					date
			)
			.then(res => {
				console.log(res.data);
				setPic(res.data.url);
			})
			.catch(err => console.log(err));
	}, [pic, date]);

	return (
		<div
			className="App"
			style={{ color: "#fff", backgroundColor: "#000", height: "100vh" }}
		>
			<div>
				<span
					style={{ fontSize: "5rem" }}
					onClick={() => setDate(date - 1)}
					role="img"
					aria-label="point-left"
				>
					{" "}
					👈 
				</span>
				<img alt="NASA APOD" src={pic} />
				<span style={{ fontSize: "5rem" }} role="img" aria-label="point-right">
					{" "}
					👉 
				</span>
			</div>
			<h1>NASA</h1>
			<h3>Astronomy Photo Of The Day</h3>
		</div>
	);
};

export default App;
