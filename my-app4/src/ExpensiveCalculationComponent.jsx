import { useState, useMemo } from "react";

export default function ExpensiveCalculationComponent(){
	const [count, setCount] = useState(0)
	const [inputValue, setInputValue] = useState('')

	// useMemo 없이
	// const expensiveCalculation = () => {
	// 	console.log('계산 실행중...')
	// 	let sum = 0
	// 	for(let i = 0; i < count * 1000000; i++){
	// 		sum += i;
	// 	}
	// 	return sum;
	// }

	// 문제상황 : inputValue만 변경될 때
	// const result = expensiveCalculation();
	// 새로 타이핑 할 때마다 계속 계산함. 증가 안해서 값은 똑같은데도..

	const result = useMemo(() => {
		console.log('계산 실행중...')
		let sum = 0
		for(let i = 0; i < count * 1000000; i++){
			sum += i;
		}
		return sum;
	}, [count])

	return(
		<div>
			<h2>count : {count}</h2>
			<button onClick={() => setCount(count + 1)}>증가</button>

			<input value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				placeholder="타이핑ㄱㄱ"/>
			<p>계산 결과 : {result}</p>
		</div>
	)
}