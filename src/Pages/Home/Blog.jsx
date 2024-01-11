import React, { useEffect, useState } from "react";
import "./Blog.css";
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
    <div className="main m-8">
      {posts.map((post) => (
        <div className="posts" key={post.id}>
          <div style={{border:'1px solid #78e0ea'}} className=" mb-10 p-10 rounded-md">
            <h1 className="posttitle font-semibold text-5xl text-[#78e0ea]">
              {post.projectname}
            </h1>
            <p className="content text-base text-white leading-loose mb-8">
              {post.Description}
            </p>

            <div className="mb-10">
              {typeof post.anyfile === "string" &&
                post.anyfile.endsWith(".png") && (
                  <img src={post.anyfile} alt="Image" />
                )}
              {typeof post.anyfile === "string" &&
                post.anyfile.endsWith(".mp4") && (
                  <video controls width="320" height="240">
                    <source src={post.anyfile} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
            </div>

            <Link className="bg-[#ffc107] link p-4 rounded-sm" to={post.linktoproject}>view in github</Link>
            <div dangerouslySetInnerHTML={{ __html: post.largecontent }} />
            <img src={post.image} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostList;
