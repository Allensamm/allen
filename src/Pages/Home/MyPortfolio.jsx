import data from "../../data/index.json";
import { Link } from "react-router-dom";
import './myskills.css'
export default function MyPortfolio() {
  return (
    <section className="portfolio--section mt-14" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h1 className="section--heading">Recent Projects</h1>
        </div>
        <div>
          <Link to={"https://github.com/allensamm"} className="bg-[#efdca7] p-4">
           
             My GitHub
          </Link>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img className="portfolioimg" src={item.src} alt="Placeholder" />
              <div className="githublink">
                <Link className="githublogo" to={item.link}>
                  <img src="./img/github-logo.png" alt="" srcset="" />
                </Link>
              </div>
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              <Link className="text-sm portfolio--link bg-[#efdca7] p-3" to="https://github.com">
                see Github
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
