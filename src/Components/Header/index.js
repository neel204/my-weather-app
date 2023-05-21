import { Link, NavLink, withRouter } from 'react-router-dom';
import './index.css';

const Header = ({ location }) => {
  const { pathname } = location;

  return (
    <nav className='weather-nav'>
      <Link to='/'>
        <img
          src='https://res.cloudinary.com/dqhwxowdo/image/upload/v1682089554/weather-low-resolution-logo-color-on-transparent-background_1_icaqkg.png'
          alt='weather-logo'
          className='weather-logo link'
        />
      </Link>
      <ul className='weather-links'>
        <li>
          <NavLink to='/' exact className='link' activeClassName='active-link active-link-animation'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/about' className='link' activeClassName='active-link active-link-animation'>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to='/contact' className='link' activeClassName='active-link active-link-animation'>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default withRouter(Header);
