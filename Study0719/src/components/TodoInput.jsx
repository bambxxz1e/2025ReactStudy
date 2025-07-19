import { useState } from "react";

export default function TodoInput(){
	const [text, setText] = useState("") // 1. 입력 상태
	const [todos, setTodos] = useState([]) // 2. 목록 상태

	const handleAdd = () => { // 3. 추가 버튼 클릭 시 실행
		setTodos([...todos, text]) // 4. 원래 있던 투두 배열(...todos)에 추가
		setText("") // 5. 입력창 바꾸기
	}

	return(
		<div>
			<input
				value={text} // 6. 입력창 연결
				onChange={(e) => setText(e.target.value)}
				placeholder="할 일을 입력하세요."/>
			<button onClick={handleAdd}>추가</button> {/* 7. 버튼 연결 */}
			<p>입력한 내용 : {text}</p>

			<ul>
				{todos.map((todo, index) => ( // 8. 목록 출력
					<li key={index}>{todo}</li>
				))}
			</ul>
		</div>
	)
}