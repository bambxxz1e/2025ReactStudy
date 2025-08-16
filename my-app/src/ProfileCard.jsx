function ProfileCard({name="익명", hobby="잠자기", fav_food="밥"}){
	return(
		<div>
			<h2>{name}</h2>
			<p>취미 : {hobby}</p>
			<p>좋아하는 음식 : {fav_food}</p>
		</div>
	)
}

// App.jsx 입력 값

	// <h1>안녕, {name}!</h1>
	// <p className="desc">리액트 첫 수업입니다!!</p>
	// <img src="/vite.svg" />

	// {/* <h1>리액트 스터디 출석부</h1>
	// <Hello name="리쿠" emoji="🐿️" color="red"/>
	// <Hello name="토쿠" emoji="⭐" color="skyblue"/>
	// <Hello name="사쿠" emoji="🥐" color="lightpink"/>

	// <h1>프로필 카드</h1>
	// <ProfileCard name="윤성연" hobby="늦잠자기" fav_food="마라탕 속 감자" />
	// <ProfileCard name="김이레" hobby="불멍&물멍" fav_food="연어!!!!!!!!!!!!!!1" />
	// <ProfileCard name="키무지혜" hobby="독서" fav_food="채소" />
	// <ProfileCard name="전유림" hobby="밥먹기" fav_food="밥" />


export default ProfileCard