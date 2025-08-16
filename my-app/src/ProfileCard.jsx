import { useState } from "react"

function ProfileCard({name="익명", hobby="잠자기", fav_food="밥"}){
	const [like, setLike] = useState(0);

	const handleLike=()=>{
		setLike(like + 1);
	}

	return(
		<div style={{
			backgroundColor: "#ffe2f1",
			borderRadius: "15px",
			padding: "20px",
			margin: "10px",
			color: "black",
			width: "350px"
		}}>
			<h2>{name}</h2>
			<p>취미 : {hobby}</p>
			<p>좋아하는 음식 : {fav_food}</p>
			<div style={{textAlign: "right"}}>
				<button onClick={handleLike} style={{backgroundColor: "#ffaad7"}}>❤️ {like}</button>
			</div>
		</div>
	)
}

// App.jsx 입력 값
	// <div style={{display: "flex", flexWrap: "wrap"}}>
	// <h1>프로필 카드</h1>
	// <ProfileCard name="윤성연" hobby="늦잠자기" fav_food="마라탕 속 감자" />
	// <ProfileCard name="김이레" hobby="불멍&물멍" fav_food="연어!!!!!!!!!!!!!!1" />
	// <ProfileCard name="키무지혜" hobby="독서" fav_food="채소" />
	// <ProfileCard name="전유림" hobby="밥먹기" fav_food="밥" />
	// </div>


export default ProfileCard