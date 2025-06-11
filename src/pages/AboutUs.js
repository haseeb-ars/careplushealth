import React from 'react';
import './AboutUs.css';

const teamMembers = [
  {
    name: 'Mehraan',
    title: 'Wearing Many Hats',
    image: 'minion.jpg', // replace with actual image path or leave blank for now
    
  },
  {
    name: 'Irfaan',
    title: 'Wearing Many Hats',
    image: 'minion.jpg',
 
  },
  {
    name: 'Saba',
    title: 'Wearing Many Hats',
    image: 'minion.jpg',
    
  },
  {
    name: 'Anzu',
    title: 'Wearing Many Hats',
    image: 'minion.jpg',
   
  },
  {
    name: 'Seb',
    title: 'Wearing Many Hats',
    image: 'minion.jpg',
    
  },
  {
    name: 'Alistair',
    title: 'Wearing Many Hats',
    image: 'minion.jpg',
    
  },
];

const AboutUs = () => {
  return (
    <div className='about-main'>


<div className="banner-wrapper">
      <div className="banner-overlay1">
      <img src="texture.jpg" alt="Banner Background" className="banner-image" />
        <div className="banner-content1">
          <h1 className="banner-title1">
            MEET <br />
            <span className="highlight">THE TEAM</span>
          </h1>
        </div>
      </div>

      <div className="team-intro-section">
        <p className="intro-line">
          Great work requires great people, and we think ours are some of the best.
        </p>
        <p className="intro-description">
          We’re a creative, friendly and diverse bunch, who truly enjoy what we do and the people we work with.
          Our team spirit, expertise and perspective helps us create solutions that go far beyond just a good idea.
        </p>
      </div>
    </div>


<div className="team-section">
      {teamMembers.map((member, index) => (
        <div className="team-member" key={index}>
          <div className="avatar-container">
            <img src={member.image} alt={member.name} className="avatar" />
          </div>
          <h3 className="member-name">{member.name}</h3>
          <p className="member-title">{member.title}</p>
        </div>
      ))}
    </div>


    </div>
  );
};

export default AboutUs;
