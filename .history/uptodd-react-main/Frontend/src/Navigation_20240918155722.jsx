import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="./about.jsx">About</Link>
      <Link to="/apply">Apply</Link>
    </nav>
  );
};

export default Navigation;
