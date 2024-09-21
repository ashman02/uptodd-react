import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/About.jsx">About</Link>
      <Link to="/apply">Apply</Link>
      <Link to="/step">Step</Link>
    </nav>
  );
};

export default Navigation;
