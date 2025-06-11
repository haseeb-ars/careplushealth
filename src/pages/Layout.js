import React, { useEffect} from 'react';
import Header from './Header.js';
import './Layout.css';
import Footer from './Footer.js';


const Layout = ({ children }) => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.layout-header');
      if (window.scrollY > 10) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    // Set initial state on mount
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="layout-container">
      {/* Header */}
      <Header></Header>

      {/* Page Content */}
      <main className="main-content">
        {children}
      </main>

      {/* Footer */}
      
      <Footer/>
      <footer className="layout-footer">
        &copy; 2018 CarePlus Health. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;