function ProfileCard({name="익명", hobby="잠자기", fav_food="밥"}){
	return(
		<div>
			<h2>{name}</h2>
			<p>취미 : {hobby}</p>
			<p>좋아하는 음식 : {fav_food}</p>
		</div>
	)
}

export default ProfileCard