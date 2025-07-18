import React, {useEffect, useState} from 'react';

function Intro(){
	const [todos, setTodos] = useState([]); // 배열로 저장하겠다.

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
		// fetch : 브라우저 안 데이터 요청, 데이터 가져올 서버 주소, 10개만
		.then((res) => res.json()) // 요청 받은 걸 json으로 바꿔라
		.then((data) => {
			console.log(data);
			setTodos(data); // 받아온 걸 업데이트
		})
		.catch((error) => {
			console.error("Error fetching todos : ", error);
		})
	}, []) // [] : 의존성 배열

	return(
		<ul>
			{todos.map((todo) => (
				<li key={todo.id}>
					{todo.title} - {todo.completed ? "✅" : "❌"}
				</li>
			))}
		</ul>
	)
}

export default Intro;