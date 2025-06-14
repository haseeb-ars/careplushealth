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
              We’re excited to introduce Care Plus Dental - where high-quality, painless, and accessible dental care is at the heart of everything we do. Designed for the whole family, our team offers a relaxing, reassuring environment where every visit feels easy and stress-free.
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
        <p>Ensure the longevity of your smile with our preventive care services.</p>
        <ul>
          <li>Routine cleanings and exams</li>
          <li>Personalized hygiene plans</li>
          <li>Additional treatments like fluoride and sealants for added protection.</li>
        </ul>
        <button>COMING SOON</button>
      </div>

      <div className="service-card1">
        <h3><span>PEDEATRICS</span></h3>
        <p>Comprehensive dental care for infants, children, and teenagers</p>
        <ul>
          <li>Routine dental exams and cleaning</li>
          <li>Preventive treatments</li>
          <li>Early diagnosis and treatment</li>
        </ul>
        <button>COMING SOON</button>
      </div>

      <div className="service-card1">
        <h3><span>PERODONTOLOGY</span></h3>
        <p>Comprehensive care to prevent, diagnose, and treat gum disease</p>
        <ul>
          <li>Scaling and root planing</li>
          <li>Periodontal maintenance</li>
          <li>Gum grafting</li>
        </ul>
        <button>COMING SOON</button>
      </div>

      <div className="service-card1">
        <h3><span>EMERGENCY</span> ORAL SURGERY</h3>
        <p>Immediate treatment for urgent dental and oral conditions</p>
        <ul>
          <li>Tooth extractions</li>
          <li>Treatment of dental abscesses and oral infections</li>
          <li>Management of facial trauma and dental injuries</li>
        </ul>
        <button>COMING SOON</button>
      </div>

      <div className="service-card1">
        <h3><span>RESTORATIVE</span> SURGERY</h3>
        <p>Advanced treatments to repair and rebuild damaged teeth and oral structures</p>
        <ul>
          <li>Dental implants to replace missing teeth</li>
          <li>Bone grafting to support implant placement</li>
          <li>Crown lengthening to prepare teeth for restorations</li>
        </ul>
        <button>COMING SOON</button>
      </div>

      <div className="service-card1">
        <h3><span>ORTHODONTICS</span></h3>
        <p>Expert care to straighten teeth and improve bite alignment</p>
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
            <h5 className="dental-family-subtitle">Children's Dentistry</h5>
            <h2 className="dental-family-title">
              Dentistry for the <em>whole</em> family
            </h2>
            <p className="dental-family-paragraph">
              Our helpful staff provides a variety of treatments that are intended to give children the greatest start and continue to be helpful over time.
            </p>
            <p className="dental-family-paragraph">
              Your children may even look forward to visiting The CarePlus Dental because of our experienced dental team, forming a positive relationship with dentists from an early age.
            </p>
            <p className="dental-family-paragraph">
              We think excellent habits are formed at a young age. Children of all ages and teenagers are welcome at our family friendly CarePlus Dental.
            </p>
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
