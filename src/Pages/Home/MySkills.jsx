import data from "../../data/index.json";
import { Link } from "react-router-dom";
import "./myskills.css";
export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <h2 className="skills--section--heading">What i know</h2>

        <div class=" bg-red-800 h-3 w-4 flex justify-center -translate-y-[1px]">
          <p className=" text-red-600">
            this is color red
          </p>
          <div class="w-3/4">
            <div class="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full"></div>
          </div>
        </div>

      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.src} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <Link
                to={`/blog/${item.title.toLowerCase()}`}
                className="skills--section--description"
              >
                {`See what I have done in ${item.title}`}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
