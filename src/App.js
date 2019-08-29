import React, { useState, useEffect } from "react";
import axios from "axios";

import Emoji from "./components/Emoji";

import "./App.scss";

const App = () => {
	const [pic, setPic] = useState("");
	const [date, setDate] = useState(27);

	const currentDate = new Date().getDate();

	useEffect(() => {
		axios
			.get(
				"https://api.nasa.gov/planetary/apod?api_key=1pcDkqzVYtHxKLA4wapP50L4SSlkVyr5cyikedG3&date=2019-08-" +
					date
			)
			.then(res => {
				setPic(res.data.url);
			})
			.catch(err => console.log(err));
	}, [pic, date]);

	const checkKey = e => {
		e = e || window.event;
		if (e.keyCode === 37) {
			setDate(date - 1);
		} else if (e.keyCode === 39) {
			setDate(date + 1);
		}
	};

	document.onkeydown = checkKey;

	return (
		<div className="App">
			<div className="img-container">
				{pic === "" ? null : (
					<Emoji
						emoji="👈"
						setDate={() => setDate(date - 1)}
						date={date}
						currentDate={currentDate}
					/>
				)}
				{pic ? (
					<img alt="NASA APOD" src={pic} style={{ height: "100vh" }} />
				) : null}

				{pic === "" ? null : (
					<Emoji
						emoji="👉"
						date={date}
						currentDate={currentDate}
						setDate={() => setDate(date + 1)}
					/>
				)}
			</div>
			<h1>NASA</h1>
			<h3>Astronomy Photo Of The Day</h3>
		</div>
	);
};

export default App;
