import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

const App = () => {
	const [pic, setPic] = useState("");

	useEffect(() => {
		axios
			.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
			.then(res => {
				console.log(res.data);
				setPic(res.data.url);
			})
			.catch(err => console.log(err));
	}, [pic]);

	return (
		<div className="App">
			<h1>NASA</h1>
			<h3>Astronomy Photo Of The Day</h3>
			<img alt="NASA APOD" src={pic} />
		</div>
	);
};

export default App;
