import React, { useState } from "react";
import "./Join.css";

const JoinOurTeam = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your application, ${formData.name}!`);
    setFormData({ name: "", email: "", position: "", message: "" });
  };

  return (
    <div className="team-container">
          <nav>
        <h1 style={{ marginRight: "500px" }}>Chef Spot</h1>
        <ul>
          <li><Link to='/about'>ABOUT</Link></li>
          <li><Link to='/events'>Events</Link></li>
          <li>   <Link to='/join'>JOIN OUR TEAM</Link></li>
          <li><Link to='./contact'>CONTACT</Link></li>
        </ul>
      </nav>
      <h1>Join Our Team</h1>
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
  );
};

export default JoinOurTeam;
