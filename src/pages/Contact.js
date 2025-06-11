import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
   <div className='contact-main'>


    <section className="contact-section">
    <div className="contact-container">
      <div className="form-side">
        <div>
        <h5 className="sub-heading">Contact Us</h5>
        <h1 className="main-heading">Book an appointment</h1>
        <p className="description">
          We consider all the drivers of change gives you the blocks you need to change to create a truly professional website.
        </p>
        </div>
        
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="text" placeholder="Phone Number" required />
          <input type="email" placeholder="Email Address" required />
          <select required>
            <option value="">Select Reason</option>
            <option value="inquiry">Inquiry</option>
            <option value="complaint">Complaint</option>
            <option value="other">Other</option>
          </select>
          <textarea placeholder="Your Message" rows="4" required></textarea>
          <button type="submit">Book Now</button>
        </form>
      </div>

      <div className="map-side">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2376.023553859603!2d-2.1868922!3d53.4501652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb3aa1b19bc31%3A0xdcb3acf1194e24d7!2sMHM%20Pharmaceuticals!5e0!3m2!1sen!2suk!4v1746272899743!5m2!1sen!2suk" 
      title='Map' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </section>


  </div>

  );
};

export default Contact;
