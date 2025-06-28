import { useState } from "react";

function Vote(props) {
	const [yes, setYes] = useState(0)
	const [no, setNo] = useState(0)

	return(
		<div style={{
			width: '400px',
			backgroundColor: 'white',
			borderRadius: '10px',
			padding: '10px 30px',
			margin: '20px',
			textAlign: 'center'
		}}>
			<h3 style={{
				color: '#000041',
				fontWeight: 'bold',
				textAlign: 'left',
				marginBottom: '30px'
			}}>Q. {props.question || "투표해주세요"}</h3>
			<p style={{color: 'green'}}>찬성 {yes}표</p>
			<p style={{color: 'red'}}>반대 {no}표</p>
			<hr style={{opacity: '70%'}} />
			<p style={{color: 'gray'}}>총 {yes + no}명 참여</p>
            <button onClick={() => setYes(yes + 1)} style={{
				backgroundColor: 'green',
				margin: '20px 10px',
				padding: '15px 0px',
				width: '45%'
			}}>👍찬성</button>
            <button onClick={() => setNo(no + 1)} style={{
				backgroundColor: 'red',
				padding: '15px 0px',
				width: '45%'
			}}>👎반대</button>
		</div>
	)
}

export default Vote