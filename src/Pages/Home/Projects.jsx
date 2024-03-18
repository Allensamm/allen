import React from "react";
import "./projects.css";
import { Route } from "react-router-dom";
const Projects = () => {
  return (
    <div className="mt-28 sm:w-[87%] w-[95%] m-auto text-white">
      <div className="sm:flex sm:flex-wrap md:justify-between ">
        <div className="relative md:mb-0 mb-24">
          <div className="relative w-fit overflow-y-scroll scrollbar-none h-[550px]">
            <img
              className="sm:w-[500px] w-[300px]"
              src={
                window.innerWidth >= 640
                  ? "./img/smalltown.png"
                  : "./img/stphine.png"
              }
              alt=""
            />
          </div>
          <div className="absolute top-[77%] w-[300px] sm:w-[500px] sm:h-32 bg-black">
            <p className="w-[90%] m-auto">
              Check out my latest landing page creation! It's a showcase of my
              web development prowess, highlighting sleek design and seamless
              functionality. Dive into the world of modern web design with this
              responsive and visually captivating interface. Experience
              innovation in every pixel
            </p>
          </div>
        </div>

        <div className="relative ">
          <div className="overflow-scroll scrollbar-none h-[550px]">
            <img
              className="sm:w-[500px] w-[300px]"
              src="./img/cardiopage.png"
              alt=""
            />
          </div>
          <div className="absolute top-[77%] w-[300px] sm:w-[500px] sm:h-32 bg-black ">
            <p className="w-[90%] m-auto">
            Check out my latest landing page creation! It's a showcase of my
              web development prowess, highlighting sleek design and seamless
              functionality. Dive into the world of modern web design with this
              responsive and visually captivating interface. Experience
              innovation in every pixel
            </p>
          </div>
        </div>

        <div className="sm:mt-24 mt-36">
          <div className="scrollbar-none h-[550px]">
            <img
              className="sm:w-[500px] w-[300px]"
              src={
                window.innerWidth >= 640
                  ? "./img/mvcheckdesk.png"
                  : "./img/mvchphone.png"
              }
              alt=""
            />
            <div className="w-[300px] sm:w-[500px] sm:h-32 bg-black ">
            <p className="w-[90%] m-auto">
            MVCheck offers a visual feast of movie posters, empowering users to express their preferences by liking, marking as seen, and commenting on their favorite films. Dive into the world of cinema with MVCheck!"
            </p>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
