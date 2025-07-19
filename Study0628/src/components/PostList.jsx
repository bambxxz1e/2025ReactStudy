import React, {useEffect, useState} from "react";

function PostList(){
	const [post, setPost] = useState([]);
	
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")

		.then((res) => res.json())
		.then((data) => {
			setPost(data);
		})
		.catch((error) => {
			console.error("Error fetching list : ", error);
		})
	}, [])

	return(
		<ul style={{textAlign: "left", width: "500px"}}>
			{post.map((post) => (
				<li key={post.id}>
					{post.title} - {post.body}
				</li>
			))}
		</ul>
	)
}

export default PostList