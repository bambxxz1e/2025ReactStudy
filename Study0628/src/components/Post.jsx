import React, {useEffect, useState} from "react";

function Post(){
	const [post, setPost] = useState([]);
	
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts")

		.then((res) => res.json())
		.then((data) => {
			setPost(data[Math.floor(Math.random() * data.length)]);
		})
		.catch((error) => {
			console.error("Error fetching list : ", error);
		})
	}, [])

	return(
		<div key={post.id}>
			<h3>{post.title}</h3>
			<p>{post.body}</p>
		</div>
	)
}

export default Post