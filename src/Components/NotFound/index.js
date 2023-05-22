import {Link} from 'react-router-dom'
import './index.css';

const NotFound = () => (
  <div className="not-found-container">
    <img
      src="http://res.cloudinary.com/dqhwxowdo/image/upload/c_scale,h_1561/v1684779234/2446912_nyveun.jpg"
      alt='not-found'
      className="not-found-img"
    />
    <h1>Error 404</h1>
    <h3>The page you looking for is not found.</h3>
    <Link to='/'>
        <button>To Home</button>
    </Link>
  </div>
);

export default NotFound;
