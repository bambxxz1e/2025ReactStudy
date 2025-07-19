import { useState, useEffect } from "react";

export default function Clock(){
	const [time, setTime] = useState(new Date().toLocaleTimeString())

	useEffect(() => {
		const timer = setInterval(() => {
			setTime(new Date().toLocaleDateString())
		}, 1000) // 1초마다 상태 갱신

		return () => {
			clearInterval(timer)
		} // 컴포넌트 사라질 때만 실행 (필수 없으면 타이머 계속 돌아감)
	}, [])

	 return(
		<div>
			<h2>현재 시각</h2>
			<p>{time}</p>
		</div>
	 )
}