import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent by ${formData.name}: ${formData.message}`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
          <nav>
        <h1 style={{ marginRight: "500px" }}>Chef Spot</h1>
        <ul>
          <li><Link to='/about'>ABOUT</Link></li>
          <li><Link to='/events'>Events</Link></li>
          <li>   <Link to='/join'>JOIN OUR TEAM</Link></li>
          <li><Link to='./contact'>CONTACT</Link></li>
        </ul>
      </nav>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
