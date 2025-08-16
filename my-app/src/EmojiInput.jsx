import { useState } from "react";

export default function EmojiInput(){
	const [text, setText] = useState("");
	const [emoji, setEmoji] = useState("");

	const handleText=(e)=>{
		setText(e.target.value);

		if(e.target.value === "angry")
			setEmoji("😡");
		else if(e.target.value === "sad")
			setEmoji("😢");
		else if(e.target.value === "happy")
			setEmoji("😄");
	}

	const handleReset=()=>{
		setText("");
		setEmoji("");
	}

	return(
		<div>
			<input value={text} onChange={handleText} placeholder="오늘의 감정을 입력해주세요."/>
			<button onClick={handleReset}>초기화</button>
			<p>오늘의 감정은? <strong>{text}</strong>{emoji}</p>
		</div>
	)
}