import React from 'react';
import "./Pharmacy.css"
import { Link } from 'react-router-dom';

const PharmacyPage = () => {

  const services = [
    {
      title: "Online Doctor",
      description:
        "Get support and treatment for 14 health conditions. Our team can help you find medicated solutions that work for your needs and suit your lifestyle.",
      icon: "🩺", // Replace with actual icon or SVG if needed
    },
    {
      title: "Prescriptions",
      description:
        "Whether you need a one-off medicine or a repeat prescription, you can have your order delivered to your home or you can pick it up with Click and Collect.",
      icon: "💊",
    },
    {
      title: "Vaccinations",
      description:
        "With a range of vaccinations available, you can get the treatment you need. So whether you need a flu jab, travel vaccines or the HPV jab, you can get support at Well.",
      icon: "🛡️",
    },
    {
      title: "Pharmacy services",
      description:
        "Support is on your doorstep with our pharmacy services. From Pharmacy First to blood pressure checks, our team can help you stay on track with your health.",
      icon: "🏪",
    }
  ];



  const sections = [
    {
      image: "wrp.png", // replace with your actual image path
      title: "Wilmslow Road Pharmacy",
      text: `
Conveniently located on the bustling Wilmslow Road, Wilmslow Road Pharmacy is a trusted community pharmacy offering expert healthcare advice, 
NHS and private prescription services, and a wide range of over-the-counter products. Our friendly team is committed to providing high-quality, 
patient-focused care, including medication reviews, travel vaccinations, flu jabs, and support for minor ailments. 
Whether you're managing a long-term condition or seeking quick help for everyday health concerns, we're here to help – walk in or contact us today.`,
      reverse: false,
      link: 'https://www.wilmslowroadpharmacy.com/'
    },
    {
      image: "CPC3.png",
      title: "CarePlus Chemist",
      text: `
CarePlus Chemist in Southport is a modern, patient-focused pharmacy dedicated to supporting the health and wellbeing of the local community. 
We offer a full range of NHS and private services, including prescription dispensing, repeat prescription management, travel vaccinations, flu jabs, 
and expert advice on minor ailments. Our experienced and friendly team is here to provide personalised care in a welcoming environment. 
Conveniently located and easily accessible, CarePlus Chemist is your trusted partner for reliable and professional healthcare services in Southport.`,
      reverse: true,
      link: 'https://www.carepluschemist.com/'
    },
    {
      image: "247.png",
      title: "247 Pharmacy",
      text: `Located in the heart of Liverpool, 247 Pharmacy is committed to providing fast, friendly, and accessible healthcare services seven days a week. 
      We offer NHS and private prescription services, over-the-counter medicines, and expert advice on a wide range of health issues. 
      From flu vaccinations and travel jabs to minor ailment support and medication reviews, our dedicated team is here to help—day or night. 
      At 247 Pharmacy, your health is our priority, whenever you need us.`,
      reverse: false,
      link: "https://www.24-7pharmacy.co.uk/"
    },
  ];



  return (
    <div className='pharmacy-main'>


      <div className="hero-section">
        <div className="hero-banner">
          <div className="hero-text">
            <h1>Your Local Health Partner</h1>
            <p>
              CarePlus operates a chain of community pharmacies across the Northwest of England—from Liverpool and Manchester to Southport. Each location provides accessible, dependable pharmacy services backed by our trusted healthcare brand.
            </p>
          </div>
        </div>

        <div className="campaign-section">
          <div className="campaign-left">
            <h1>Expert Clinical Services</h1>
            <p>
              At CarePlus, we offer much more than dispensing medicines.
            </p>
            <Link to="/aboutus">
  <button className="outline-button">Our Team</button>
</Link>
          </div>
          <div className="campaign-right">
            <p>
At CarePlus, our pharmacies serve as a first point of contact for everyday healthcare—trusted spaces where expert advice and personal support are always within reach.            </p>
            <p>
             Whether it’s a medication review, minor illness guidance, or a private consultation, our pharmacists are here to listen and help you make informed choices about your health.
            </p>
            <p>
             We’re committed to more than just treatment—we’re here to guide, support, and empower you every step of the way.
            </p>
          </div>
        </div>
      </div>

      {/* This is a scrolling banner */}
      {/*  <div className="scrolling-container">
        <div className="scrolling-text">
          <span>Flawless&nbsp;&nbsp;&nbsp;START LIVING YOUR BEST LIFE TODAY&nbsp;&nbsp;&nbsp;</span>
          <span>Flawless&nbsp;&nbsp;&nbsp;START LIVING YOUR BEST LIFE TODAY&nbsp;&nbsp;&nbsp;</span>
          <span>Flawless&nbsp;&nbsp;&nbsp;START LIVING YOUR BEST LIFE TODAY&nbsp;&nbsp;&nbsp;</span>
          <span>Flawless&nbsp;&nbsp;&nbsp;START LIVING YOUR BEST LIFE TODAY&nbsp;&nbsp;&nbsp;</span>
        </div>
      </div>  */}


      <section className="health-section">
      <h1>Better health, better you</h1>
        <p className="subheading">
          With a range of online and in-store services, you can take control of your health in ways that work for you
        </p>
        <div className="services-grid2">
          {services.map((service, index) => (
            <div className="service-card2" key={index}>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <div className="icon">{service.icon}</div>
            </div>
          ))}
        </div>
      </section>


      <div className="sections-wrapper">
      {sections.map((section, index) => (
        <div
          className={`section-row ${section.reverse ? "reverse" : ""}`}
          key={index}
        >
          <div className="section-image">
            <img src={section.image} alt={section.title} />
          </div>
          <div className="section-content">
            <h2>{section.title}</h2>
            <p>{section.text}</p>
            <a className="button-p" href={section.link} target="_blank" rel="noopener noreferrer">Visit</a>
          </div>
        </div>
      ))}
    </div>



    </div>


  );
};

export default PharmacyPage;
