import { useState } from "react";

export default function TodoInput(){
	const [text, setText] = useState("") // 1. 입력 상태
	const [todos, setTodos] = useState([]) // 2. 목록 상태

	const handleAdd = () => { // 3. 추가 버튼 클릭 시 실행
		setTodos([...todos, text]) // 4. 원래 있던 투두 배열(...todos)에 추가
		setText("") // 5. 입력창 바꾸기
	}

	const deleteTodo = (targetText) => { // 문자열 배열이기 때문에 매개변수가 문자열임 (만약 id가 있다면 id로)
		setTodos(todos.filter(todo => todo !== targetText))
		// targeText가 아닌 todo만을 모아서 새 배열을 만들고 다시 저장
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
					<li key={index}>
						{todo}
						<button onClick={() => deleteTodo(todo)}>삭제</button>
					</li>
				))}
			</ul>
		</div>
	)
}