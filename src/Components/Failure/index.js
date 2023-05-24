import { Link } from 'react-router-dom';
import './index.css';

const Failure = (props) => {
  const { userInputLocation } = props;

  return (
    <div>
      <h3>
        Sorry, the place <span>'{userInputLocation}'</span> could not be found. Please check the spelling or try a different location.
      </h3>
      <p>For more information, please visit the About section to learn more.</p>
      <Link to={{ pathname: '/about', hash: 'section1' }}>
        <button>About</button>
      </Link>
    </div>
  );
};

export default Failure;
