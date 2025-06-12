import React from 'react';
import './AboutUs.css';



const AboutUs = () => {
  return (
    <div className='about-main'>


<div className="banner-wrapper">
      <div className="banner-overlay1">
      <img src="England.jpg" alt="Banner Background" className="banner-image" />
        <div className="banner-content1">
          <h1 className="banner-title1">
            MEET <br />
            <span className="highlight">THE TEAM</span>
          </h1>
        </div>
      </div>

  <div className="team-intro-section">
  <div className="team-intro-left">
    <div className="intro-line">
      Great work requires great people,<br />and we think ours are some of the best.
    </div>
  </div>

  <div className="team-intro-right">
    <p>
      Our team is the heart of everything we do. From experienced pharmacists to dedicated support staff, each member brings expertise, compassion, and a shared commitment to delivering outstanding patient care across our pharmacies.
    </p>
  </div>
</div>


    </div>


<div className="careplus-team-section">
  <div className="team-grid">
    {[
      { name: 'Mehraan Sattar', role: 'Director', image: '/team.jpg' },
      { name: 'Irfaan Sattar', role: 'Product Manager', image: '/team.jpg' },
      { name: 'Saba Sattar', role: 'Creative Leader', image: '/team.jpg' },
      { name: 'Anzu Uddin', role: 'Marketing Head', image: '/team.jpg' },
      { name: 'Alistair', role: 'Operations Manager', image: '/team.jpg' },
      { name: 'Seb', role: 'Clinical Advisor', image: '/team.jpg' },
      { name: 'David Green', role: 'IT Manager', image: '/team.jpg' },
      { name: 'Zara Khan', role: 'HR Coordinator', image: '/team.jpg' },
    ].map((member, index) => (
      <div className="team-card" key={index}>
        <img src={member.image} alt={member.name} className="team-photo" />
        <h3 className="team-name">{member.name}</h3>
        <p className="team-role">{member.role}</p>
      </div>
    ))}
  </div>
</div>



    </div>
  );
};

export default AboutUs;
