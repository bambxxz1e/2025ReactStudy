import React, {useEffect, useState} from "react";

export default function Toggle(){
	const [shouldFetch, setShouldFetch] = useState(false);
	const [posts, setPosts] = useState([]);

	const handleClick = () => {
		setShouldFetch(prev => !prev)
	}

	useEffect = (() => {
		if(shouldFetch){
			fetch("https://jsonplaceholder.typicode.com/posts")

			.then((res) => res.json())
			.then((data) => (setPosts.slice(0, 10)))
		}
	}, [shouldFetch]) // 의존성 배열 (업데이트 - 상태 바뀔 때마다)

	return(
		<div>
			<button onClick={handleClick}>불러오기</button>
			{posts.map((post) => (
				<div key={post.id}>
					<h3>{post.title}</h3>
					<p>{post.body}</p>
				</div>
			))}
		</div>
	)
}