const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/submit">Submit a Term</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </div>
      <style jsx>{`
        .navbar {
          background-color: #333;
          color: #fff;
        }
        .navbar-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 30px;
        }
        .logo {
          font-size: 1.5em;
          font-weight: bold;
        }
        .nav-links {
          list-style: none;
          display: flex;
          gap: 20px;
        }
        .nav-links a {
          color: #fff;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .nav-links a:hover {
          color: #0070f3;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
