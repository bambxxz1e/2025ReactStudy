import { useState } from "react";

export default function PasswordInput(){
	const [hide, setHide] = useState(true);

	const handleHide=()=>{
		setHide((prev) => !prev);
	}

	return(
		<div>
			<input type={hide ? "password" : "text"} placeholder="비밀번호를 입력해주세요."></input>
			<button onClick={handleHide}>{hide ? "보이기" : "숨기기"}</button>
		</div>
	)
}