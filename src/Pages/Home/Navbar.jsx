import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Link as RouterLink, useLocation,  } from "react-router-dom";
import Loginregister from "./Loginregister";
import Userform from "./Userform";


const API_URL = 'http://127.0.0.1:8000';

function Navbar() {

  const [currentUser, setCurrentUser] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    setCurrentUser(false);
  };

  const location = useLocation();
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu;
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu;
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div>
        <img src="./img/logo.svg" alt="Logo" />
      </div>
      <a
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <img src="./img/menu.2dcedcd45ab4f1b28a88798e130072ea.svg" alt="" />
      </a>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <RouterLink
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="/home"
              className="navbar--content"
            >
              Home
            </RouterLink>
          </li>

          {location.pathname !== "/blog" && (
            <li>
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="AboutMe"
                className="navbar--content"
              >
                About me
              </Link>
            </li>
          )}

          {location.pathname !== "/blog" && (
            <li>
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="MyPortfolio"
                className="navbar--content"
              >
                Portfolio
              </Link>
            </li>
          )}

          {location.pathname !== "/blog" && (
            <li>
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="testimonial"
                className="navbar--content"
              >
                Testimonials
              </Link>
            </li>
          )}

          <li>
            <Loginregister />
          </li>
        </ul>
      </div>
      <Link
        onClick={closeMenu}
        activeClass="navbar--active-content"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="Contact"
      >
        Contact Me
      </Link>
    </nav>
  );
}

export default Navbar;
