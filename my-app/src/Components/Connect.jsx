import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Connect.css"; // Optional: Your CSS file

const Connect = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert(`Thanks for reaching out, ${formData.name}!`);
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting contact message:", error);
      alert("Failed to submit your message.");
    }
  };

  return (
    <div>
      <nav>
        <h1 style={{ marginRight: "500px" }}>Chef Spot</h1>
        <ul>
          <li><Link to='/about'>ABOUT</Link></li>
          <li><Link to='/events'>EVENTS</Link></li>
          <li><Link to='/join'>JOIN OUR TEAM</Link></li>
          <li><Link to='/connect'>CONTACT</Link></li>
        </ul>
      </nav>

      <div className="connect-container">
        <h1 style={{color:"darkblue"}}>Connect With Us</h1>
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

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Connect;
