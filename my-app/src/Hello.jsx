function Hello({name = "익명", emoji="❤️", color="black"}){
	return (
		<h2 style={{color}}>
			{emoji}안녕하세요, {name}님!
		</h2>
	)
}

export default Hello