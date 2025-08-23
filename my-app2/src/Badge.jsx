export default function Badge({score=0}){
	if(score < 0 || score > 100){
		return <span>잘못된 점수</span>
	}

	const label = score >= 90 ? "우수" : score >= 70 ? "보통" : "노력";
	const color = score >= 90 ? "skyblue" : score >= 70 ? "green" : "pink";

	return (
		<span style={{background:color, color:"white", padding:"4px 8px", borderRadius:8}}>
			{label}

			{score === 100 && <span style={{marginLeft:8}}>⭐</span>}
		</span>
	)
}