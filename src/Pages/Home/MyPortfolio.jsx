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
          <Link to={"https://github.com/allensamm"} className="bg-[#1d96ec]  px-10 py-3 rounded-full">
           
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
            <div className="portfolio--section--card--content gap-[32px] items-start flex-col max-w-[300px] flex mt-8">
              <div>
                <h3 className="portfolio--section--title text-[#efdca7] font-bold">{item.title}</h3>
                <p className="text-md text-white">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
