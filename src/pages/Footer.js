import React from "react";
import "./Footer.css"; // Import the CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column logo-column">
          <div className="footer-logo">
            
            <h1>CarePlus Health</h1>
            
          </div>
          <div className="footer-contact">
            <h2>CONTACTS</h2>
            <p>CarePlus Health</p>
            <p>Unit 6D Longden Rd,</p>
            <p>Levenshulme, Manchester,</p>
            <p>Lancashire, M12 5SR</p>
            <p><strong>Tel:</strong>+44 7707700070</p>
            <p><strong>Email:</strong> info@careplushealth.co.uk</p>
            <p><strong>Web:</strong> www.careplushealth.co.uk</p>
            
          </div>
        </div>

        <div className="footer-column company-column">
          <h2>COMPANY</h2>
          <p><strong>Company Name:</strong><br />CarePlus Health Limited</p>
          <p><strong>Company Registration Number:</strong><br />11225883</p>
          <p><strong>Registered Office:</strong><br />
          Unit 6D Longden Rd,<br />
          Levenshulme, Manchester,<br />
          Lancashire, M12 5SR
          </p>
          <p><strong>Founder | Pharmacist | Director</strong><br />Mr Mehraan Sattar, MRPharm, PGDip, IPresc</p>
          
        </div>

        <div className="footer-column links-column">
          <h2>QUICK LINKS</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/complaints">Complaints & Comments</a></li>
            <li><a href="/privacy">Privacy</a></li>
          </ul>
        </div>

        <div className="footer-column social-column">
          <h2>SOCIAL</h2>
          <div className="social-icons">
            <a href="facebook.com"><i className="fab fa-facebook-f"></i></a>
            <a href="x.com"><i className="fab fa-twitter"></i></a>
            <a href="instagram.com"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
