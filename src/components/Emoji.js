import React from "react";

const Emoji = ({ emoji, setDate, date, currentDate }) => {
	return (
		<span
			className="emoji"
			role="img"
			aria-label="point-right"
			onClick={() => setDate(date - 1)}
		>
			{date === currentDate ? null : emoji} 
		</span>
	);
};

export default Emoji;
