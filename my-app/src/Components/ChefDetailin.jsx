import React from 'react';
import './ChefDetailin.css'; // Optional: Add custom styles

function ChefDetailin() {
  return (
    <div className="chef-detail-container">
      <h1>Chef Ramesh Kumar</h1>
      <h2>Specialty: Indian Cuisine</h2>
      <p><strong>Location:</strong> Chennai, Tamil Nadu, India</p>

      <h3>Profile</h3>
      <p>
        Chef Ramesh Kumar is a highly experienced and creative chef specializing in authentic Indian cuisine. 
        With over 15 years of culinary expertise, he is known for blending traditional flavors with modern 
        cooking techniques to craft exceptional dishes.
      </p>

      <h3>Experience</h3>
      <ul>
        <li>
          <strong>Executive Chef</strong> – Spice Symphony, Chennai (2018 - Present)
          <ul>
            <li>Developed a signature menu featuring regional Indian dishes.</li>
            <li>Supervised and trained kitchen staff to maintain high-quality standards.</li>
            <li>Ensured the use of locally sourced, fresh ingredients.</li>
          </ul>
        </li>
        <li>
          <strong>Head Chef</strong> – Curry House, Delhi (2014 - 2018)
          <ul>
            <li>Designed seasonal menus with North and South Indian specialties.</li>
            <li>Maintained excellent customer reviews for taste and presentation.</li>
          </ul>
        </li>
        <li>
          <strong>Sous Chef</strong> – Tandoori Treats, Mumbai (2010 - 2014)
          <ul>
            <li>Assisted in creating innovative recipes that became customer favorites.</li>
            <li>Managed inventory and ensured smooth kitchen operations.</li>
          </ul>
        </li>
      </ul>

      <h3>Education</h3>
      <ul>
        <li>Diploma in Culinary Arts – Indian Culinary Academy, Bangalore (2008)</li>
        <li>Bachelor of Hotel Management – Anna University, Chennai (2006)</li>
      </ul>

      <h3>Skills</h3>
      <ul>
        <li>Expert in Indian spices and flavor profiles</li>
        <li>Menu planning and innovative recipe creation</li>
        <li>Food plating and presentation</li>
        <li>Inventory and team management</li>
      </ul>

      <h3>Awards & Recognition</h3>
      <ul>
        <li>Best Indian Chef Award – Culinary Excellence Association (2020)</li>
        <li>Gold Medal – National Tandoori Cooking Competition (2017)</li>
      </ul>

      <h3>Contact</h3>
      <p>Email: ramesh.kumar@example.com | Phone: +91-9876543210</p>
    </div>
  );
}

export default ChefDetailin;
