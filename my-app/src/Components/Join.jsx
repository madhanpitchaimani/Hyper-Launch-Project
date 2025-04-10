import React, { useState } from "react";
import { Link } from 'react-router-dom'
import "./join.css";

const Join = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    message: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      resume: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newApplication = {
      name: formData.name,
      email: formData.email,
      position: formData.position,
      message: formData.message,
      resumeName: formData.resume ? formData.resume.name : "",
    };

    try {
      const response = await fetch("http://localhost:5000/applications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newApplication),
      });

      if (response.ok) {
        alert(`Thank you for your application, ${formData.name}!`);
        setFormData({
          name: "",
          email: "",
          position: "",
          message: "",
          resume: null,
        });
        e.target.reset(); // Reset the file input manually
      } else {
        alert("Something went wrong while submitting. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Error submitting application.");
    }
  };

  return (
    <div>
       <nav>
                      <h1 style={{ marginRight: "500px" }}>Chef Spot</h1>
                      <ul>
                        <li><Link to='/about'>ABOUT</Link></li>
                        <li><Link to='/events'>EVENTS</Link></li>
                        <li>   <Link to='/join'>JOIN OUR TEAM</Link></li>
                        <li><Link to='/connect'>CONTACT</Link></li>
                      </ul>
                    </nav>
    <div className="team-container">
       
      <h1 style={{color:"darkblue"}}>Join Our Team</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
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
          Position:
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Resume:
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
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

        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default Join;

