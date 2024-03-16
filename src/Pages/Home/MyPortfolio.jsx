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
       
          <div className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img className="portfolioimg" src="./img/cardiopage.png"  alt="Placeholder" />
              <div className="githublink">
                <Link className="githublogo" to={"https://github.com/Allensamm/workout.git"}>
                  <img src="./img/github-logo.png" alt="" srcset="" />
                </Link>
              </div>
            </div>
            <div className="portfolio--section--card--content gap-[32px] items-start flex-col max-w-[300px] flex mt-8">
              <div>
                <h3 className="portfolio--section--title text-[#efdca7] font-bold">Landing page</h3>
                <p className="text-md text-white">this is a landing page with just HTML and CSS</p>
              </div>
            </div>
          </div>

          <div className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img className="portfolioimg" src="./img/smalltown.png"  alt="Placeholder" />
              <div className="githublink">
                <Link className="githublogo" to={"https://github.com/Allensamm/small_town_hotel_website.git"} >
                  <img src="./img/github-logo.png" alt="" srcset="" />
                </Link>
              </div>
            </div>
            <div className="portfolio--section--card--content gap-[32px] items-start flex-col max-w-[300px] flex mt-8">
              <div>
                <h3 className="portfolio--section--title text-[#efdca7] font-bold">Landing page</h3>
                <p className="text-md text-white">A local hotel website built with html, bootstrap and css</p>
              </div>
            </div>
          </div>


          <div className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img className="portfolioimg" src="./img/image.png"  alt="Placeholder" />
              <div className="githublink">
                <Link className="githublogo" to={"https://github.com/Allensamm/react-weather-app.git"}>
                  <img src="./img/github-logo.png" alt="" srcset="" />
                </Link>
              </div>
            </div>
            <div className="portfolio--section--card--content gap-[32px] items-start flex-col max-w-[300px] flex mt-8">
              <div>
                <h3 className="portfolio--section--title text-[#efdca7] font-bold">Landing page</h3>
                <p className="text-md text-white">this is a landing page with just HTML and CSS</p>
              </div>
            </div>
          </div>
      
      </div>
    </section>
  );
}
