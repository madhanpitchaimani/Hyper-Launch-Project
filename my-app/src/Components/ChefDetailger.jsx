import React from 'react';
import './ChefDetailger.css'; // Optional: Add custom styles

function ChefDetailger() {
  return (
    <div className="chef-detail-container">
      <h1>Chef Hans Müller</h1>
      <h2>Specialty: German Cuisine</h2>
      <p><strong>Location:</strong> Berlin, Germany</p>

      <h3>Profile</h3>
      <p>
        Chef Hans Müller is a celebrated culinary expert specializing in authentic German cuisine.
        With over 18 years of professional experience, Chef Müller is renowned for his skill in crafting traditional dishes
        like bratwurst, schnitzel, and sauerkraut, while infusing creativity into his menus for a modern twist.
      </p>

      <h3>Experience</h3>
      <ul>
        <li>
          <strong>Executive Chef</strong> – Das Gourmet Haus, Berlin (2015 - Present)
          <ul>
            <li>Designed a menu focusing on regional specialties from Bavaria, Saxony, and beyond.</li>
            <li>Implemented sustainable practices using locally sourced ingredients.</li>
            <li>Led a talented team in creating fine-dining experiences.</li>
          </ul>
        </li>
        <li>
          <strong>Head Chef</strong> – Schwarzwald Kitchen, Munich (2010 - 2015)
          <ul>
            <li>Crafted innovative recipes for traditional German dishes.</li>
            <li>Collaborated with brewers for food and beer pairings.</li>
            <li>Introduced seasonal tasting menus that boosted customer engagement.</li>
          </ul>
        </li>
        <li>
          <strong>Sous Chef</strong> – Rhine Culinary Retreat, Cologne (2005 - 2010)
          <ul>
            <li>Assisted in perfecting recipes that showcased flavors of the Rhine Valley.</li>
            <li>Managed kitchen inventory and ensured smooth operations.</li>
          </ul>
        </li>
      </ul>

      <h3>Education</h3>
      <ul>
        <li>Master Diploma in German Culinary Arts – Culinary Academy of Stuttgart (2003)</li>
        <li>Bachelor of Hospitality Management – University of Heidelberg (2000)</li>
      </ul>

      <h3>Skills</h3>
      <ul>
        <li>Expert in traditional German recipes and techniques</li>
        <li>Creative menu planning and recipe innovation</li>
        <li>Food pairing with German beers and wines</li>
        <li>Leadership and kitchen management</li>
      </ul>

      <h3>Awards & Recognition</h3>
      <ul>
        <li>Best German Chef Award – National Culinary Society (2018)</li>
        <li>Gold Medal – Oktoberfest Culinary Challenge (2015)</li>
      </ul>

      <h3>Contact</h3>
      <p>Email: hans.mueller@example.com | Phone: +49-123-456-7890</p>
    </div>
  );
}

export default ChefDetailger;
