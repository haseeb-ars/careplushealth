import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './MapSection.css'; // We'll create this next

// Fix for default marker icons
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const MapSection = () => {
  useEffect(() => {
    // Initialize map
    const map = L.map('map-section').setView([53.551612, -2.643196], 10);

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Your locations data
    const locations = [
      { lat: 53.433648, lng: -2.228699, title: "Wilmslow Road Pharmacy", description: "M20 3BG" },
      { lat: 53.640781, lng: -3.002837, title: "CarePlus Chemist", description: "PR8 5AB" },
      { lat: 53.480510, lng: -3.018777, title: "247 Pharmacy", description: "L22 4QR" },
      { lat: 53.567730, lng: -2.883668, title: "Aspire Pharmacy", description: "L39 2DN" },
      { lat: 53.553738, lng: -2.224425, title: "Bowness Pharmacy (Middleton)", description: "M24 4WT" },
      { lat: 53.518515, lng: -2.257840, title: "Formans Chemist", description: "M25 0FX" },
      { lat: 53.535327, lng: -2.417967, title: "Bowness Pharmacy (Little Hulton)", description: "M38 9RQ" },
      { lat: 53.450208, lng: -2.189571, title: "CarePlus Health (Headoffice)", description: "M12 5SR" }
    ];

    // Add markers
    locations.forEach(location => {
      const marker = L.marker([location.lat, location.lng], { icon: DefaultIcon }).addTo(map);
      marker.bindPopup(`
        <div class="map-popup">
          <h4>${location.title}</h4>
          <p>${location.description}</p>
        </div>
      `);
    });

    return () => map.remove();
  }, []);

  return (
    <section className="map-section-wrapper">
      <div className="map-section-content">
        <h1>Our Locations</h1>
        <p>Find us at these convenient locations</p>
        <div id="map-section" className="map-container"></div>
      </div>
    </section>
  );
};

export default MapSection;