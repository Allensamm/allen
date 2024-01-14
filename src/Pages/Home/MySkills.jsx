  import { Link } from "react-router-dom";
import "./myskills.css";
export default function MySkills() {
  return (
    <>
      <section id="mySkills"></section>
      <div className="md:flex sm:space-x-5 space-x-0  justify-center grid md:gap-0 gap-[10rem] mt-20">
        <div className="flex htmlcss sm:space-x-5 space-x-0">

          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#f7664a] to-transparent w-48">
            <div className="skills">
              <div className="flex skills--section--img">
                <h3 className="skills--section--title">HTML</h3>
                <img src="./img/html.png" alt="" />
              </div>
              <Link
                className="skills--section--description  text-sm text-white"
                to={"/blog/html"}
              >
                Projects in HTML
              </Link>
            </div>
          </div>

          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#1572b6] to-transparent w-48">
            <div className="skills">
              <div className="flex skills--section--img">
                <h3 className="skills--section--title">CSS</h3>
                <img src="./img/social.png" alt="" />
              </div>
              <Link
                className="skills--section--description text-sm text-white"
                to={"/blog/css"}
              >
                Projects in CSS
              </Link>
            </div>
          </div>

        </div>

        <div className="flex  htmlcss sm:space-x-5 space-x-0"> 

          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#ffc107] to-transparent w-48">
            <div className="skills">
              <div className="flex skills--section--img">
                <h3 className="skills--section--title">JavaScript</h3>
                <img src="./img/java-script.png" alt="" />
              </div>
              <Link
                className="skills--section--description text-sm text-white"
                to={"/blog/javascript"}
              >
                Projects in JavaScript
              </Link>
            </div>
          </div>

          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#78e0ea] to-transparent w-48">
            <div className="skills">
              <div className="flex skills--section--img">
                <h3 className="skills--section--title">Python</h3>
                <img src="./img/python.png" alt="" />
              </div>
              <Link
                className="skills--section--description text-sm  text-white"
                to={"/blog/python"}
              >
                Projects in Python
              </Link>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}
