import { Link } from "react-scroll";
import { Link as Towhere } from "react-router-dom";
import React from "react";

const getCurrentYear = () =>{
  return new Date().getFullYear();
}

function Footer() {
  return (
    <footer className="footer--container">
      <div className="footer--link--container">
        <div className="footer--items">
          <ul>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="heroSection"
                className="text-md"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="MyPortfolio"
                className="text-md"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="AboutMe"
                className="text-md"
              >
                About Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className="divider" />
      <div className="footer--content--container">
        <p className="footer--content">made by <span>join2getherwork</span> {getCurrentYear()}</p>
        <div className="footer--social--icon">
          <ul>
            <li>
              <Towhere
              to={'https://twitter.com/R3al_sam'}
              >
                Twitter
              </Towhere>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
