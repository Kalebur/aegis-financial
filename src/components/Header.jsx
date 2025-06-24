export const Header = () => {
  return (
    <header>
      <a href="/">
        <div className="logo">
          <img
            src="/assets/images/shield.png"
            alt="Aegis Financial Shield Logo"
          />
          <span className="logo-text">Aegis Financial</span>
        </div>
      </a>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/support">Support</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
