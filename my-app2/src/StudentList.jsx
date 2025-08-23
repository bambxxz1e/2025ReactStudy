import { useState } from "react";

export default function StudentList(){
	const [students, setStudents] = useState([
		{id: "s1", name: "윤성연", present: true},
		{id: "s2", name: "독운호", present: true},
		{id: "s3", name: "마에다", present: true}
	])

	const toggle = (id) => { // map() -> 새로운 배열을 만듦
		setStudents((prev) => // 이전 학생 배열 가져와서 바꾸고 교체하겟음
			prev.map((s) => (s.id === id ? {...s, present : !s.present} : s)))
			// {...s, present : !s.present} : 이전 배열 복붙해와서 값 바꿈 (리액트는 참조 값이 바뀐걸 알아채서 리렌더링, 그래서 복붙해서 쓰는겨)
	}

	return (
		<div>
			<h1>학생리스트</h1>
			<ul style={{paddingLeft: 16}}>
				{students.map((s) => (
					<li key={s.id} style={{marginBottom: 8}}>
						{s.name} - {s.present ? "출석" : "결석"}
						<button onClick={() => toggle(s.id)} style={{marginLeft: 8}}>
							{s.present ? "결석 처리" : "출석 처리"}
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}