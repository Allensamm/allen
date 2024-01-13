import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Link as RouterLink, useLocation,  } from "react-router-dom";
import Loginregister from "./Loginregister";



// const API_URL = 'http://127.0.0.1:8000';
 const API_URL = 'https://portfoliobackend-9og0.onrender.com';

function Navbar() {
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
    <nav className={`navbar ${navActive ? "active" : ""}` }>
      <div className="logo--mobile">
        <img className="" src="./img/logo.svg" alt="Logo" />
      </div>
      <div
        className={`nav__hamburger ${navActive ? "active" : ""} mt-[-14px]`}
        onClick={toggleNav}
      >
        <img src="./img/menu.2dcedcd45ab4f1b28a88798e130072ea.svg" alt="" />
      </div>
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
          <li>
            <Loginregister />
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
