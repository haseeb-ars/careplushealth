import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`layout-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-content">
          <div className="logo-container">
            <Link to="/">
              <img className="logo" src="Logo3.png" alt="site-logo" />
            </Link>
          </div>

          <nav className="desktop-nav">
            <Link to="/">Home</Link>
            <Link to="/pharmacy">Pharmacy</Link>
            <Link to="/dental">Dental</Link>
            <Link to="/aboutus">About Us</Link>
            <Link to="/contact">Contact</Link>
          </nav>

          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </div>
        </div>
      </header>

      <div className={`overlay ${menuOpen ? 'show' : ''}`} onClick={closeMenu}>
        <div className="slider" onClick={(e) => e.stopPropagation()}>
          <div className="close-icon" onClick={closeMenu}>
            <FiX />
          </div>
          <nav className="slider-nav">
            <Link to="/" onClick={closeMenu}>Home</Link>
            <Link to="/pharmacy" onClick={closeMenu}>Pharmacy</Link>
            <Link to="/dental" onClick={closeMenu}>Dental</Link>
            <Link to="/aboutus" onClick={closeMenu}>About Us</Link>
            <Link to="/contact" onClick={closeMenu}>Contact</Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
