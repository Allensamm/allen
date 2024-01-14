import { Link } from "react-router-dom";
export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content mb-5">
          <h1>
            <span className="span">Building</span> Scalable and Robust
        <span className="span"> Software</span>
          </h1>
        </div>
        <Link to={'https://allensamuel569@gmail.com'} className="bg-[#efdca7] p-3">Get In Touch</Link>
      </div>
      <div className="hero--section--img">
        <img src="./img/imageee.png" alt="Hero Section" />
      </div>
    </section>
  );
}
