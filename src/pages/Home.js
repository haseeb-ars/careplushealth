import React from 'react';
import './Home.css';
import MapSection from './MapSection';
import useSlideUpOnScroll from './useSlideUpOnScroll'; // adjust path if needed

const Home = () => {
    useSlideUpOnScroll();
    return (
        <div className='home'>


            <div className="home-banner ">
      <div className="banner-overlay ">
        <div className="banner-content slide-up">
          <h1>CarePlus Health<br /></h1>
          <p>CarePlus Health is a leading healthcare company dedicated to delivering high-quality, patient-centered services across the UK. 
            We offer a wide range of integrated healthcare solutions—from primary care and health screenings to chronic disease management and digital health support
            <br /></p>
          
        </div>
        <img className="badge" src="nhs.jpg" alt="badge" />
      </div>
      
    </div>


            <div class="responsive-spacing">
            </div>


<div className="pharmayouth-section">
  <div className="pharmayouth-container">
    <div className="pharmayouth-card slide-up">
      <img src="quality.png" alt="Strategy Icon" className="pharmayouth-icon" />
      <h3 className="pharmayouth-title">Quality Care</h3>
      <p className="pharmayouth-text">
We deliver safe, personalised healthcare services across our pharmacies—ensuring every patient receives the attention and support they deserve.      </p>
    </div>

    <div className="pharmayouth-card slide-up">
      <img src="teamwork.png" alt="Design Icon" className="pharmayouth-icon" />
      <h3 className="pharmayouth-title">Expert Staff</h3>
      <p className="pharmayouth-text">
Our team includes highly trained pharmacists and healthcare professionals committed to providing reliable advice and clinical excellence.
      </p>
    </div>

    <div className="pharmayouth-card slide-up">
      <img src="location.png" alt="Development Icon" className="pharmayouth-icon" />
      <h3 className="pharmayouth-title">Local Presence</h3>
      <p className="pharmayouth-text">
With multiple locations across North West England, CarePlus Health ensures convenient access to essential pharmacy services for local communities.
      </p>
    </div>
  </div>
</div>




            <div className='rich-text section-spacing slide-up'>
                <h1>Committed to Community Health</h1>
                <p>With a dedicated team of experienced pharmacists, healthcare professionals, and support staff, CarePlus Health ensures that every patient interaction is met with expert clinical care, genuine compassion, and a commitment to improving health outcomes. We take pride in offering trusted advice and personalised support across all our pharmacy locations.</p>
            </div>

            <div className='health-services-section slide-up'>
                <h2>Innovative Health Services</h2>
                <div className='services-grid'>
                    <div className='service-item'>
                        <img src='icon1.png' alt='Pharmacist Advice' />
                        <h3>Free Pharmacist advice</h3>
                        <p>Can’t get to see your GP? Get seen quicker, feel better sooner with a free consultation with our Pharmacist. No appointment required!</p>
                    </div>
                    <div className='service-item'>
                        <img src='icon2.png' alt='Supporting the NHS' />
                        <h3>Supporting the NHS</h3>
                        <p>The NHS is increasingly relying on our pharmacies to deliver great healthcare. We provide many of the NHS services available in the North-West of England.</p>
                    </div>
                    <div className='service-item'>
                        <img src='icon3.png' alt='NHS BP Checks' />
                        <h3>Free NHS BP checks</h3>
                        <p>High blood pressure is associated with strokes, heart attacks. Our pharmacist can measure your blood pressure and explain the results and refer you if necessary.</p>
                    </div>
                    <div className='service-item'>
                        <img src='icon4.png' alt='In-store prescribing' />
                        <h3>In-store prescribing</h3>
                        <p>Our organisation includes pharmacists that can prescribe prescription-only medication thereby reducing the strain on NHS services and delivering convenient health care.</p>
                    </div>
                    <div className='service-item'>
                        <img src='icon5.png' alt='Service Projects' />
                        <h3>Service specific projects</h3>
                        <p>We deliver all the services you'd expect of a community pharmacy and we’re investing in special projects to improving access to advanced care like <strong>Travel Jabs Near Me</strong>.</p>
                    </div>
                    <div className='service-item'>
                        <img src='icon6.png' alt='Fast Health Clinics' />
                        <h3>Fast access health clinics</h3>
                        <p>Our in-pharmacy clinic mean patients aren't waiting ages to get expert health care. They can prescription-grade medicines and advice directly from our pharmacists.</p>
                    </div>
                </div>
            </div>

            <div className="services-section slide-up" style={{   }}>
                <div className="services-header">
                    <h4 className="services-subtitle">Empowering Better Health Across the UK</h4>
                    <h2 className="services-title">Our Projects</h2>
                    <p className="services-description">
                    At CarePlus Health, we are proud to lead a variety of innovative healthcare initiatives designed to make essential services more accessible and convenient for communities nationwide.
                    </p>
                </div>

                <div className="services-cards">

  <a href="https://www.traveljabsnearme.co.uk/" target="_blank" rel="noopener noreferrer" className="service-card">
    <div className="service-icon">✈️</div>
    <h3 className="service-title">TravelJabsNearMe</h3>
    <p className="service-text">
      TravelJabsNearMe.co.uk helps travelers locate trusted clinics offering essential travel vaccinations and health advice.
    </p>
  </a>

  <a href="https://freecovidtests.co.uk/" target="_blank" rel="noopener noreferrer" className="service-card">
    <div className="service-icon">🦠</div>
    <h3 className="service-title">FreeCovidTests</h3>
    <p className="service-text">
      We make it easy and hassle-free for individuals across the UK to order free COVID-19 test kits online
    </p>
  </a>

  <a href="https://pharmacistfirst.co.uk/" target="_blank" rel="noopener noreferrer" className="service-card">
    <div className="service-icon">👨🏼‍⚕️</div>
    <h3 className="service-title">PharmacistFirst</h3>
    <p className="service-text">
      PharmacistFirst.co.uk connects you directly with qualified pharmacists for fast, professional advice and treatment of common conditions.
    </p>
  </a>

  <a href="/" className="service-card">
    <div className="service-icon">👂🏻</div>
    <h3 className="service-title">EarClear2u</h3>
    <p className="service-text">
      EarClear2u.co.uk offers safe and effective ear wax removal services delivered by trained healthcare professionals
    </p>
  </a>

</div>
</div>


            <div className='Map'>
                <MapSection></MapSection>
            </div>

            <div className="pharmacy-list-section">
                <div className="pharmacy-list">
                    <div className="pharmacy-item">
                        <div className="pharmacy-content">
                            <h3>Aspire Pharmacy. L39 2DN</h3>
                            <p>9 Railway Road, Ormskirk, Ormskirk, L39 2DN, United Kingdom</p>
                        </div>
                    </div>
                    <div className="pharmacy-item">
                        <div className="pharmacy-content">
                            <h3>Bowness Pharmacy (Little Hulton). M38 9RQ</h3>
                            <p>Cleggs Lane, Little Hulton, Manchester, United Kingdom</p>
                        </div>
                    </div>
                    <div className="pharmacy-item">
                        <div className="pharmacy-content">
                            <h3>Bowness Pharmacy (Middleton). M24 4WT</h3>
                            <p>26 Bowness Road, Middleton, Manchester, M24 4WT, United Kingdom</p>
                        </div>
                    </div>
                    <div className="pharmacy-item">
                        <div className="pharmacy-content">
                            <h3>CarePlus Chemist. PR8 5AB</h3>
                            <p>34 Shakespeare Street, Southport, Southport, PR8 5AB, United Kingdom</p>
                        </div>
                    </div>
                    <div className="pharmacy-item">
                        <div className="pharmacy-content">
                            <h3>Formans Chemist. M25 0FX</h3>
                            <p>12 Bury Old Road, Prestwich, Manchester, M25 0EX, United Kingdom</p>
                        </div>
                    </div>
                    <div className="pharmacy-item">
                        <div className="pharmacy-content">
                            <h3>West Bank Pharmacy. WA8 0DG</h3>
                            <p>8 Mersey Road, Widnes, Widnes, WA8 0, United Kingdom</p>
                        </div>
                    </div>
                    <div className="pharmacy-item">
                        <div className="pharmacy-content">
                            <h3>Wilmslow Pharmacy. M20 3BG</h3>
                            <p>480 Wilmslow Road, Withington, Manchester, M20 3BG, UK</p>
                        </div>
                    </div>
                    <div className="pharmacy-item">
                        <div className="pharmacy-content">
                            <h3>CarePlus Health (Head Office) M12 5SR</h3>
                            <p>Unit 6D Longden Rd, Levenshulme, Manchester, M12 5SR</p>
                        </div>
                    </div>
                </div>
            </div>



            
        </div>
    );
};

export default Home;

