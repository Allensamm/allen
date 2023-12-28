import React, { useState } from 'react';
import './AboutMe.css'
export default function AboutMe() {
  const [showCV, setShowCV] = useState(false);

  const toggleCV = () => {
    setShowCV((prevShowCV) => !prevShowCV);
  };

  return (
    <section id="AboutMe" className={`about--section ${showCV ? 'cv-visible' : ''}`}>
      <div className="about--section--img">
        <img src="./img/Hero.svg" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <h1 className="skills-section--heading">Who  is
           <span style={{background:'black'}}> Allen</span>
           </h1>
          <p className="hero--section-description">
          Am software developer specializing in frontend development with knowledge in <span>Python </span> and <span> Django</span>, am proficient in building user interfaces and experiences for web applications. I use technologies such as <span>HTML</span>, <span>CSS</span>, and <span>JavaScript</span> to create visually appealing and interactive frontends. Additionally, my knowledge in Python and Django allows me to contribute to the backend development, enabling seamless communication between the frontend and backend components of a web application.
          </p>
          <p className="hero--section-description">
           i am skilled in crafting responsive, user-friendly designs and collaborating with backend developers to deliver robust and efficient web solutions.
          </p>
          <button onClick={toggleCV}>See CV</button>
        </div>
      </div>
      {showCV && (
        <div>
        <div className="cv--section">
          {/* Embed your Google Docs CV here */}
          <iframe src="https://docs.google.com/document/d/e/2PACX-1vTaw4uWlF90DE3YS5tT_1wUgMhbvsJ4gfC-ecuzfi5eL2EQ6SO7UaWyfWe4lH29eQ/pub?embedded=true"
           width="700"
           height="1890px"
           title="CV"
          ></iframe>
         
        </div>
         <button type='button' onClick={toggleCV}>Close CV</button>
        </div>
      )}
    </section>
  );
}
