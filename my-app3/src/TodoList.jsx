import { useState, useMemo } from 'react'

export default function TodoList() {
  const [todos, setTodos] = useState([
	{id: 1, title: "리액트 설치하기", done: false},
	{id: 2, title: "쇼핑몰 기획서 수정하기", done: false},
	{id: 3, title: "위시 사랑하기", done: true}
  ])

  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [newTitle, setNewTitle] = useState("")

  const visibleTodos = useMemo(() => {
	const keyword = search.trim().toLowerCase()
	
	return todos.filter((t) => {
	  const matchKeyword = keyword === "" || t.title.toLowerCase().includes(keyword)
	  // keyword가 빈 문자열이거나, title에 keyword가 포함되어 있으면 true
	  const matchStatus = 
		statusFilter === "all" ? true :
		  statusFilter === "active" ? !t.done : t.done

	  return matchKeyword && matchStatus // 조건 : 둘 다 true일 때 그 배열을 담겟다
	})
  }, [todos, search, statusFilter]) // 의존성 배열 : 얘네들이 바뀔 때만 실행하겠다

  const addTodo = (title) => {
	const trimmed = title.trim()
	if(!trimmed) return
	const newItem = {id: Date.now(), title: trimmed, done: false}
	setTodos((prev) => [newItem, ...prev]) // ... : spread 연산자
	// 새 할 일 맨 앞에 두고 뒤에 기존 배열 나열
  }

  const toggleTodo = (id) => {
	setTodos((prev) =>
	  prev.map((t) => (t.id === id ? {...t, done : !t.done} : t)))
  }

  return (
	<>
	  <div>
		<h1>폼 관리 : 검색 + 필터 + 추가</h1>
	  
		<div>
		  <input
			placeholder='검색어 입력'
			value={search}
			onChange={(e) => setSearch(e.target.value)}>
		  </input>
		  <select
			value={statusFilter}
			onChange={(e) => setStatusFilter(e.target.value)}>
			  <option value="all">전체</option>
			  <option value="active">미완료</option>
			  <option value="done">완료</option>
		  </select>
		</div>

		<form
		  onSubmit={(e) => {
			e.preventDefault() // 기본 동작(새로고침) 막기
			addTodo(newTitle)
		  }}>
		  <label htmlFor='newTodo'>새 할 일</label>
		  <input
			id="newTodo"
			placeholder="할 일을 입력하세요"
			value={newTitle}
			onChange={(e) => setNewTitle(e.target.value)}>
		  </input>
		  <button type='submit' disabled={newTitle.trim().length < 1}>추가</button>
		</form>

		<TodoLists items={visibleTodos} onToggle={toggleTodo} />

		<p>
		  전체 {todos.length}개 / 미완료 {todos.filter((t) => !t.done).length}개
		</p>

	  </div>
	</>
  )
}

function TodoLists({items, onToggle}){
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
			<span>{t.title}</span>
		  </label>
		</li>
	  ))}
	</ul>
  )
}