import React, { useEffect, useState } from "react";
import './Blog.css'
import { Link, useParams } from "react-router-dom";

function PostList() {
  const { category } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const apiUrl = category
          ? `http://127.0.0.1:8000/api/posts/${category}/`
          : "http://127.0.0.1:8000/api/posts/";

        const response = await fetch(apiUrl);

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
  }, [category]);

  return (
    <div className="main">
      <h2>Blog Posts</h2>
      <ul>
        {posts.map((post) => (
          <div className="posts" key={post.id}>
            <h1 className="posttitle">{post.projectname}</h1>
            <p className="content">{post.Description}</p>

            {post.anyfile && (
              <div>
                <video width="320" height="240" controls>
                  <source src={post.anyfile} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}

            <Link to={post.linktoproject}>
              {post.linktoproject}
            </Link>
            <div dangerouslySetInnerHTML={{ __html: post.largecontent }} />
            <img src={post.image} alt="" />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
