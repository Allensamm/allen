import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Link as RouterLink, useLocation,  } from "react-router-dom";
import { account } from "../../appwrite";
import { useNavigate } from "react-router-dom";



function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    checkLoginStatus();
  }, []);

  async function checkLoginStatus() {
    try {
      // Check if there is a logged-in user
      const user = await account.get();
      setIsLoggedIn(user);   
      console.log(user);
    } catch (error) {
      console.error('Error checking login status:', error);
    }
  }



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

 
const navigate = useNavigate()

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
        <ul className="">
        <li className=" text-white">
            <RouterLink to='/home' >
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
                className="navbar--content text-white"
                
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
                className="navbar--content text-white"
              >
                Portfolio
              </Link>
            </li>
          )}
          {isLoggedIn ? ( 
          <button
          className="text-white"
          type="button"
          onClick={async () => {
            await account.deleteSession('current');
            setIsLoggedIn(false)
            navigate('/404')
          }}
        >
          Logout
        </button>
          ):(<li className=" text-white">
            <RouterLink to='/Signin' >
              Signin
            </RouterLink>
          </li>)
          }
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
