import { useState } from "react";

export default function Counter(){
	const [count, setCount] = useState(0);

	const handlePlus=()=>{ // 화살표 함수
		setCount(count + 1);
	}

	const handleMinus=()=>{
		setCount(count - 1);
	}

	return(
		<div>
			<h2>카운터</h2>
			<p>현재값 : {count}</p>

			<button onClick={handlePlus}>+1</button>
			<button onClick={handleMinus}>-1</button>
		</div>
	)
}