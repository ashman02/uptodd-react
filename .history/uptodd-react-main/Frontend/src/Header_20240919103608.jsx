// Header.js

import './App';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo_url" alt="Logo" />
      </div>
      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="/premium-program">Premium Program</a>
        <a href="/success-story">Success Story</a>
        <a href="/about">About</a>
        <a href="/blog">Blog</a>
        <button className="cta-button">Start for INR 449</button>
      </nav>
    </header>
  );
};

export default Header;
