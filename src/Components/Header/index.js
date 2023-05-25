import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

import './index.css';

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const location = useLocation();

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  useEffect(() => {
    setShowNavbar(false); // Close the navbar when the route changes
  }, [location]);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dqhwxowdo/image/upload/v1682089554/weather-low-resolution-logo-color-on-transparent-background_1_icaqkg.png"
              alt="weather-logo"
              className="logo link"
            />
          </Link>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <GiHamburgerMenu className='hum'/>
        </div>
        <div className={`nav-elements ${showNavbar ? 'active' : ''}`}>
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="active">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
