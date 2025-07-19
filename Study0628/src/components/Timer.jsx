import React, {useEffect, useState} from "react";

function Timer(){
	const [time, setTime] = useState(new Date().toLocaleTimeString());

	useEffect(() => {
		const timer = setInterval(() => {
			setTime(new Date().toLocaleTimeString())
		}, 1000);

		return() => {
			clearInterval(timer);
		};
	}, [])

	return(
		<div style={{paddingTop: "50px", fontSize: "20px"}}>{time}</div>
	)
}

export default Timer