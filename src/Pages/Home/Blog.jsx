import React, { useEffect, useState } from "react";
import './Blog.css'

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/posts/");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="main">
      <h2>Blog Posts</h2>
      <ul>
        {posts.map((post) => (
          <div className="posts">
            <h3 key={post.id}>{post.title}</h3>
            <p key={post.content}>{post.content}</p>
            <div dangerouslySetInnerHTML={{ __html: post.largecontent }} />
            <img src={post.image} alt=""/>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
