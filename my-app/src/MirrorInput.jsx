import { useState } from "react";

export default function MirrorInput(){
	const [text, setText] = useState("");

	const handleChange=(e)=>{ // e : 이벤트
		setText(e.target.value); // e.target : 이벤트가 발생한 타겟
	}

	const handleReset=()=>{
		setText("");
	}

	return(
		<div>
			<h2>입력한 값이 그대로 나와요!</h2>
			<input value={text} onChange={handleChange} placeholder="여기에 입력해보세요." />
			{/* 사용자가 값을 새로 입력할 때마다 리렌더링 */}

			<button onClick={handleReset}>초기화</button>

			<p>당신이 입력한 값은 <strong>{text}</strong> 입니다.</p>
		</div>
	)
}