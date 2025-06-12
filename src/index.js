import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';


import Layout from './pages/Layout';
import Home from './pages/Home';
import Dental from './pages/CarePlusDental';
import Contact from './pages/Contact';
import Pharmacy from './pages/Pharmacy';
import AboutUs from './pages/AboutUs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop/>
      <Layout>
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/dental" element={<Dental />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="pharmacy" element={<Pharmacy />} />
          <Route path="aboutus" element={<AboutUs />} />
        </Routes>
      </Layout>
    </Router>
  </React.StrictMode>
);
