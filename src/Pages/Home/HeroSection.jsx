import { useState } from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const [imgclick, clicked] = useState([]);

  const handlethisclicked = (imageID) => {
    clicked((prevclicked) => [...prevclicked, imageID]);
  };
  return (
    <>
    <img
        className="-z-[1] absolute -top-20 sm:-left-20 sm:top-40"
        src="./img/star.svg"
        alt=""
      />

      <img
        className="-z-[1] absolute -top-20 sm:left-[60%] sm:top-40"
        src="./img/star.svg"
        alt=""
      />
    <section id="heroSection" className="hero--section mb-28">
      

      <div className="hero--section--content--box">
        <div className="hero--section--content mb-8">
          <h1>
            <span className="span">Building</span> Scalable and Robust
            <span className="span"> Software</span>
          </h1>
        </div>
        <Link
          to={"https://allensamuel569@gmail.com"}
          className="bg-[#1d96ec]  px-10 py-3 rounded-full"
        >
          Get In Touch
        </Link>
      </div>
      <div className="hero--section--img ml-[40%] top-[-30px] relative">
      <img  src="./img/git.png" alt="" className=' pointer-events-none' />

      <img onClick={() => handlethisclicked('img5')} src="./img/javascript.png" alt="" className={` ${imgclick.includes('img5') ? 'img5' : ''}`} />

        <img onClick={() => handlethisclicked('img4')} src="./img/python (1).png" alt="" className={` ${imgclick.includes('img4') ? 'img4' : ''}`} />

        <img  onClick={() => handlethisclicked('img3')}  className={` ${imgclick.includes('img3') ? 'img3' : ''}`}  src="./img/tailwind.png" alt=""/>

        <img  onClick={() => handlethisclicked('img2')}  className={` ${imgclick.includes('img2') ? 'img2' : ''}`}  src="./img/react.png" alt=""/>

        <img  onClick={() => handlethisclicked('img1')}  className={` ${imgclick.includes('img1')? 'img1' : ''}`} src="./img/vs.png" alt=""/>
      </div>
    </section>
    </>
  );
}
