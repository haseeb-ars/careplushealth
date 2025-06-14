import React from 'react';
import './CarePlusDental.css';

const Dental = () => {
  return (
    <div className='dental'>

      <div className="dental-relax-section">
        <div className="dental-relax-container">
          <div className="dental-relax-image">
            <img src="/DBanner.jpg" alt="Smiling Woman" />
          </div>
          <div className="dental-relax-text">
            <img alt='logo' src='Dental-logo.png' className='Dental-logo'></img>
            <h2 className="dental-relax-title">
              Delivering <em>painless, accessible</em> dental care for you and your family.
            </h2>
            <p className="dental-relax-paragraph">
              At CarePlus Dental, your smile is our priority. We combine expert care, the latest technology, and a warm, 
              welcoming environment to make every visit comfortable and stress-free. Whether you need a routine checkup, 
              cosmetic dentistry, or advanced treatments, our experienced team is here to help you achieve a healthy, beautiful smile. 
              Experience the CarePlus difference — where caring for your smile is caring for you.
            </p>
          </div>
        </div>
      </div>

      <div className="rich-text-section">
        <div className="rich-text-container">
          <div className="rich-text-heading">
            <h1>Coming Soon</h1>
          </div>
          <div className="rich-text-description">
            <p>
              We’re excited to introduce Care Plus Dental - where high-quality, painless, and accessible dental care is at the heart of everything we do. Designed for the whole family, We offer a relaxing, reassuring environment where every visit feels easy and stress-free.
              From your child's first check-up to advanced care for adults and seniors, we focus on prevention, early treatment, and lasting comfort to keep every smile healthy and bright.
              <br></br>
              We can’t wait to welcome you and your family - A new, more caring kind of dentistry is coming your way!
            </p>
          </div>
        </div>
      </div>


      


      <div className="dental-services-section">
      <div className="service-card1">
        <h3><span>CHECKUP</span></h3>
        <p>Ensure the longevity of your smile with our proactive care services.</p>
        <ul>
          <li>Routine exams and prophylaxis</li>
          <li> Oral cancer screening</li>
          <li>Personalized hygiene plans</li>
          <li>diet and lifestyle advice</li>
        </ul>
        <button>COMING SOON</button>
      </div>

      <div className="service-card1">
        <h3><span>PEDEATRICS</span></h3>
        <p>Comprehensive dental care for infants, children, and teenagers.</p>
        <ul>
          <li>Routine dental exams and cleaning</li>
          <li>Preventive flouride and sealants</li>
          <li>Early diagnosis and treatment</li>
        </ul>
        <button>COMING SOON</button>
      </div>

      <div className="service-card1">
        <h3><span>PERODONTOLOGY</span></h3>
        <p>Comprehensive care to prevent, diagnose, and treat gum disease.</p>
        <ul>
          <li>Professional plaque and stain removal</li>
          <li> Periodontal therapy</li>
          <li>Scaling and root planing</li>
          <li>Ongoing periodontal care</li>
          
        </ul>
        <button>COMING SOON</button>
      </div>

      <div className="service-card1">
        <h3><span>EMERGENCY CARE</span> </h3>
        <p>Immediate treatment for dental and oral conditions.</p>
        <ul>
          <li>Urgent Pain Management</li>
          <li>Tooth removal</li>
          <li>Dental abscesses and oral infections</li>
          <li>Facial trauma and dental injuries</li>
          
        </ul>
        <button>COMING SOON</button>
      </div>

      <div className="service-card1">
        <h3><span>RESTORATIVE</span> </h3>
        <p>Restoring teeth to their original function and appearance.</p>
        <ul>
          <li>Fillings</li>
          <li>Root canal treatments</li>
          <li>Crowns, Bridges</li>
         <li>Implants and Dentures</li>
        </ul>
        <button>COMING SOON</button>
      </div>

      <div className="service-card1">
        <h3><span>ORTHODONTICS</span></h3>
        <p>Expert care to align teeth and restore aesthetics and function alignment.</p>
        <ul>
          <li>Traditional braces for effective tooth movement</li>
          <li>Clear aligners for discreet, comfortable treatment</li>
          <li>Retainers to maintain your perfect smile</li>
        </ul>
        <button>COMING SOON</button>
      </div>
    </div>


      <div className="dental-family-section">
        <div className="dental-family-container">
          <div className="dental-family-image">
            <img src="/Dental-family.jpg" alt="Dentist with Child" />
          </div>
          <div className="dental-family-text">
            <h5 className="dental-family-subtitle">Care you can count on</h5>
            <h2 className="dental-family-title">
              Dentistry for the whole<em></em> family
            </h2>
            <p className="dental-family-paragraph">
              At Careplus dental, we believe that healthy smiles start at home—and that means caring for every member of your family, from toddlers to grandparents. 
            </p>
            <p className="dental-family-paragraph">
 We are dedicated to providing gentle, comprehensive care tailored to each age and stage of life. Whether it’s your child’s first checkup, routine cleanings, or advanced treatments, we’re here to keep you and your family smiling bright for years to come.             </p>
            <p className="dental-family-paragraph">
Discover personalized dentistry that’s convenient, comfortable, and focused on your family’s long-term oral health.            </p>
          </div>
        </div>
      </div>


      <div className="contact-container1">
      <div className="form-section1">
        <h1>
          WE WOULD <br />
          LOVE TO HEAR <br />
          FROM YOU
        </h1>
        <p>
          Simply fill out the form below, and we'll get <br />
          back to you within 48 business hours.
        </p>
        <form 
  action="https://api.web3forms.com/submit" 
  method="POST"
>

  <input type="hidden" name="access_key" value="648675c0-b3ae-45c7-a7df-6b0bd3f8c85a" />

  <input type="hidden" name="redirect" value="https://web3forms.com/success" />

  <label>
    Name <span className="required">*</span>
  </label>
  <input type="text" name="name" placeholder="Name" required />

  <label>
    Email <span className="required">*</span>
  </label>
  <input type="email" name="email" placeholder="Email" required />

  <label>
    Message <span className="required">*</span>
  </label>
  <textarea name="message" placeholder="Message" required></textarea>

  <button type="submit">SUBMIT</button>
</form>

      </div>

      <div className="image-section1">
        <img src="teeth.jpg" alt="Contact Artwork" />
      </div>
    </div>



    </div>
  );
};

export default Dental;
