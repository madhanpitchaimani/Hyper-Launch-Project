import React from 'react';
import './ChefDetailit.css'; // Optional: Add custom styles

function ChefDetailit() {
  return (
    <div className="chef-detail-container">
      <h1>Chef Luca Moretti</h1>
      <h2>Specialty: Italian Cuisine</h2>
      <p><strong>Location:</strong> Milan, Italy</p>

      <h3>Profile</h3>
      <p>
        Chef Luca Moretti is an award-winning chef renowned for his mastery of Italian gastronomy. 
        With over 20 years of culinary experience, Chef Moretti blends classic Italian traditions 
        with contemporary flair, delivering unforgettable dining experiences.
      </p>

      <h3>Experience</h3>
      <ul>
        <li>
          <strong>Executive Chef</strong> – La Dolce Vita, Milan (2015 - Present)
          <ul>
            <li>Designed a refined menu featuring regional Italian dishes.</li>
            <li>Innovated recipes using seasonal and locally sourced ingredients.</li>
            <li>Managed a top-tier culinary team ensuring consistent excellence.</li>
          </ul>
        </li>
        <li>
          <strong>Head Chef</strong> – Trattoria Romana, Florence (2010 - 2015)
          <ul>
            <li>Introduced modern plating techniques to traditional Italian recipes.</li>
            <li>Developed wine pairings with Tuscan dishes.</li>
          </ul>
        </li>
        <li>
          <strong>Sous Chef</strong> – Amalfi Gourmet, Naples (2005 - 2010)
          <ul>
            <li>Collaborated on crafting iconic coastal Italian dishes.</li>
            <li>Maintained high standards of food preparation and presentation.</li>
          </ul>
        </li>
      </ul>

      <h3>Education</h3>
      <ul>
        <li>Master Diploma in Italian Culinary Arts – Scuola di Cucina Italiana, Bologna (2003)</li>
        <li>Bachelor of Hospitality Management – University of Milan (2000)</li>
      </ul>

      <h3>Skills</h3>
      <ul>
        <li>Expertise in pasta-making and traditional Italian sauces</li>
        <li>Creative recipe development and food plating</li>
        <li>Wine pairing and sommelier knowledge</li>
        <li>Leadership and team management</li>
      </ul>

      <h3>Awards & Recognition</h3>
      <ul>
        <li>Michelin Star – La Dolce Vita, Milan (2017)</li>
        <li>Gold Medal – Italian Culinary Excellence Awards (2015)</li>
      </ul>

      <h3>Contact</h3>
      <p>Email: luca.moretti@example.com | Phone: +39-123-456-7890</p>
    </div>
  );
}

export default ChefDetailit;
