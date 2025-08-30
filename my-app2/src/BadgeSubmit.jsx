export default function BadgeSubmit({state}){
	const label = state === "정상" ? "제출함" : state === "지각" ? "늦게 제출함" : "미제출함";
	const color = state === "정상" ? "green" : state === "지각" ? "orange" : "red";

	return (
		<span style={{background: color, color: "white", padding: "6px", borderRadius: 8, marginLeft: 8}}>
			{label}
		</span>
	)
}