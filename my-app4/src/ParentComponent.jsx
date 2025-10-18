import { useState } from "react";

export default function ParentComponent(){
	const [count, setCount] = useState(0)

	const expensiveCalculation = () => {
		console.log("복잡한 계산 실행중...")

		let result = 0
		for(let i = 0; i < 100000000; i++){
			result += 1;
		}
		return result;
	}

	const calculateValue = expensiveCalculation()

	return(
		<div>
			<h1>Count : {count}</h1>
			<button onClick={() => setCount(count + 1)}>증가</button>
			<p>계산결과 : {calculateValue}</p>
		</div>
	)
}