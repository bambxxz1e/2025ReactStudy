import { useState, useMemo } from "react";

export default function TodoListExam(){
	const [todos, setTodos] = useState([
		{id: 1, title: "숙제하기", done: true},
		{id: 2, title: "위시보러가기⭐👼", done: false}
	])

	const [search, setSearch] = useState("")
	const [statusFilter, setStatusFilter] = useState("all")
	const [newTitle, setNewTitle] = useState("")

	const visibleTodos = useMemo(() => { // 조건에 맞는 todos 찾아내기
		const keyword = search.trim().toLowerCase()

		return todos.filter((t) => {
			const matchKeyword = keyword === "" || t.title.toLowerCase().includes(keyword)

			const matchStatus =
				statusFilter === "all" ? true :
				statusFilter === "active" ? !t.done : t.done

			return matchKeyword && matchStatus
		})
	}, [todos, search, statusFilter])

	const addTodo = (title) => { // 할 일 추가
		const trimmed = title.trim()
		if(!trimmed) return
		const newItem = {id: Date.now(), title: trimmed, done: false}
		setTodos((prev) => [newItem, ...prev])
	}

	const toggleTodo = (id) => { // 완료 표시
		setTodos((prev) =>
			prev.map((t) => (t.id === id ? {...t, done : !t.done} : t)))
	}

	const deleteTodo = (id) => {
		setTodos((prev) => prev.filter((t) => (t.id !== id)))
	}

	const deleteDone = () => {
		setTodos((prev) => prev.filter((t) => !t.done))
	}

	return(
		<>
			<div style={{marginLeft: "100px"}}>
				<h1>8/30 투두리스트 숙제</h1>

				<div>
					<input
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						placeholder="검색어 입력"/>
					<select
						value={statusFilter}
						onChange={(e) => setStatusFilter(e.target.value)}>
						<option value="all">전체</option>
						<option value="all">미완료</option>
						<option value="all">완료</option>
					</select>
				</div>

				<form
					onSubmit={(e) => {
						e.preventDefault()
						addTodo(newTitle)
					}}>
					<input
						id="newTodo"
						placeholder="할 일을 입력하세요"
						value={newTitle}
						onChange={(e) => setNewTitle(e.target.value)}/>
					<button type="submit" disabled={newTitle.trim().length < 1}>추가</button>
				</form>
				
				<button onClick={deleteDone}>완료 일괄 삭제</button>

				<TodoList items={visibleTodos} onToggle={toggleTodo} onDelete={deleteTodo}/>

				<p>
					전체 {todos.length}개 / 미완료 {todos.filter((t) => !t.done).length}개
				</p>
			</div>
		</>
	)
}

function TodoList({items, onToggle, onDelete}){
	if(items.length === 0) return <p>조건에 맞는 항목이 없습니다.</p>

	return(
		<ul>
		{items.map((t) => (
			<li key={t.id}>
			<label>
				<input type='checkbox'
				checked={t.done}
				onChange={() => onToggle(t.id)}>
				</input>
				<span
					style={{textDecoration: t.done ? "line-through" : "none"}}>
					{t.title}
				</span>
				<button onClick={() => onDelete(t.id)}>삭제</button>
			</label>
			</li>
		))}
		</ul>
	)
}