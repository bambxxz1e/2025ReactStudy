import { useState } from "react";

export default function ToggleBox(){
	const [on, setOn] = useState(false);

	const toggle=()=>{
		setOn((prev) => !prev); // prev : 가장 최신의 이전 상태값
		// 비동기 업데이트, setOn(!on)이면 제대로 업데이트 되지 않을 수 있음.
	}

	return(
		<div>
			<h2>토글 박스</h2>
			<button onClick={toggle}>{on ? "끄기" : "켜기"}</button>
		</div>
	)
}