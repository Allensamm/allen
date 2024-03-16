import React, { useEffect, useState } from "react";
import "./Blog.css";
import { Link, useParams } from "react-router-dom";

function PostList() {
  const { category } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
   

    fetchPosts();
  }, [category]);

  return (
    <div className="main m-8">
        <div className="posts" >
          <div style={{border:'1px solid gray'}} className=" mb-10 p-10 rounded-md">
            <h1 className="posttitle font-semibold text-5xl text-[#78e0ea]">
              
            </h1>
            <p className="content text-base text-white leading-loose mb-8">
              
            </p>

            <div className="mb-10">
              {typeof post.anyfile === "string" &&
                post.anyfile.endsWith(".png") && (
                  <img  alt="Image" />
                )}
              {typeof post.anyfile === "string" &&
                post.anyfile.endsWith(".mp4") && (
                  <video controls width="320" height="240">
                    <source type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
            </div>

            <Link className="bg-[#ffc107] link p-4 rounded-sm" to={post.linktoproject}>view in github</Link>
            <div className="text-white mt-10" dangerouslySetInnerHTML={{ __html: post.largecontent }} />
            <img  alt="" />
          </div>
        </div>
  
    </div>
  );
}

export default PostList;
