import React, { useState } from "react";
import "./AboutMe.css";
export default function AboutMe() {
  const [showCV, setShowCV] = useState(false);

  const toggleCV = () => {
    setShowCV((prevShowCV) => !prevShowCV);
  };

  return (
    <section
      id="AboutMe"
      className={`about--section ${showCV ? "cv-visible" : ""}`}
    >
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <header className="aboutme--header">
            <p className="hello--intro text-[#1d96ec]">HELLO</p>
            <h1 className="skills-section--heading">I'm Allen Samuel</h1>
          </header>
          <p className="hero--section-description">
            A software developer specializing in frontend development with
            knowledge in <span>JavaScript </span> and <span> Python[Django]</span>, am
            proficient in building user interfaces and experiences for web
            applications. I use technologies such as <span>Nextjs</span>,{" "}
            <span>React</span> to create visually
            appealing and interactive frontends. Additionally, my knowledge in
            Python and Django allows me to contribute to backend
            development.
          </p>
          <button className="see--cv bg-[#1d96ec]  px-10 py-3 rounded-full" onClick={toggleCV}>
            See CV
          </button>
        </div>
        <video className="about-intro-video" width="700" height="300" controls>
          <source src="./img/intro.mp4" />
          your browser does not suppport the vedeo tag
        </video>
      </div>
      {showCV && (
        <div>
          <div className="cv--section">
            <iframe
              src="https://docs.google.com/document/d/e/2PACX-1vTaw4uWlF90DE3YS5tT_1wUgMhbvsJ4gfC-ecuzfi5eL2EQ6SO7UaWyfWe4lH29eQ/pub?embedded=true"
              width="700"
              height="1890px"
              title="CV"
            ></iframe>
          </div>
          <button
            className="close--cv bg-[#1d96ec]  px-10 py-3 rounded-full"
            type="button"
            onClick={toggleCV}
          >
            Close CV
          </button>
        </div>
      )}
    </section>
  );
}
