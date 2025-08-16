function Hello({name = "익명", emoji="❤️", color="black"}){
	return (
		<h2 style={{color}}>
			{emoji}안녕하세요, {name}님!
		</h2>
	)
}

export default Hello

// App.jsx 입력 값

	// <h1>리액트 스터디 출석부</h1>
	// <Hello name="리쿠" emoji="🐿️" color="red"/>
	// <Hello name="토쿠" emoji="⭐" color="skyblue"/>
	// <Hello name="사쿠" emoji="🥐" color="lightpink"/>