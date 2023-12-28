import data from "../../data/index.json";
import { Link } from "react-router-dom";
export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <h2 className="skills--section--heading">What i know</h2>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.src} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <Link to='/beauser' className="skills--section--description">{item.description}</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
